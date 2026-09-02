import Link from 'next/link';
import { LoginForm } from './login-form';

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const params = await searchParams;
  const nextPath = params.next && params.next.startsWith('/') && !params.next.startsWith('//') ? params.next : '/';

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <section className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-2xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-zinc-500">HYPNOX STUDIOS</p>
        <h1 className="mt-4 text-2xl font-semibold">Acceso al Dashboard</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">Inicia sesión con Discord. Después de autenticarte, el sistema comprobará que tu cuenta tenga acceso autorizado.</p>
        {params.error && <p role="alert" className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-xs leading-5 text-zinc-500">No se pudo completar el inicio de sesión. Inténtalo nuevamente.</p>}
        <LoginForm nextPath={nextPath} />
        <Link href="/" className="mt-4 block text-center text-xs text-zinc-600 hover:text-zinc-300">Volver al inicio</Link>
      </section>
    </main>
  );
}
