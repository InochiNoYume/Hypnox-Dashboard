import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) return NextResponse.next({ request });

  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() { return request.cookies.getAll(); },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  const { data: { user } } = await supabase.auth.getUser();
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  const isAuthRoute = pathname.startsWith('/auth');
  const isPublicRoute = pathname === '/login' || pathname === '/unauthorized' || isAuthRoute || pathname === '/api/health';

  if (!user && !isPublicRoute) {
    const nextPath = `${pathname}${search}`;
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    loginUrl.searchParams.set('next', nextPath);
    return NextResponse.redirect(loginUrl);
  }

  if (user && pathname === '/login') {
    const requestedNext = request.nextUrl.searchParams.get('next') ?? '/';
    const safeNext = requestedNext.startsWith('/') && !requestedNext.startsWith('//') ? requestedNext : '/';
    return NextResponse.redirect(new URL(safeNext, request.url));
  }

  if (user && !isPublicRoute) {
    const [{ count, error: accessError }, { data: dashboardUser, error: rpcError }] = await Promise.all([
      supabase.from('dashboard_access').select('*', { count: 'exact', head: true }).limit(1),
      supabase.rpc('is_dashboard_user'),
    ]);

    const hasTableAccess = !accessError && (count ?? 0) > 0;
    const hasRpcAccess = !rpcError && dashboardUser === true;
    if (!hasTableAccess && !hasRpcAccess) {
      const unauthorizedUrl = request.nextUrl.clone();
      unauthorizedUrl.pathname = '/unauthorized';
      return NextResponse.redirect(unauthorizedUrl);
    }
  }

  return response;
}
