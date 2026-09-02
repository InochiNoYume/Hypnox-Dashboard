import { redirect } from 'next/navigation';
import { getDashboardAccess } from '@/lib/dashboard-access';
import { Header } from './header';
import { MobileNav } from './mobile-nav';
import { Sidebar } from './sidebar';

function SetupRequired() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <section className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] text-zinc-600">HYPNOX DASHBOARD</p>
        <h1 className="mt-4 text-3xl font-semibold">Conexión pendiente</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          El repositorio está listo. Las variables de Supabase todavía no están configuradas,
          por lo que el acceso real se habilitará en la etapa de credenciales.
        </p>
      </section>
    </main>
  );
}

export async function DashboardShell({ children }: { children: React.ReactNode }) {
  const configured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  );

  if (!configured) return <SetupRequired />;

  const access = await getDashboardAccess();
  if (!access) redirect('/acceso-denegado');

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />
      <div className="md:pl-64">
        <Header role={access.role} discordUserId={access.discordUserId} />
        <div className="fixed left-4 top-3 z-30 md:hidden"><MobileNav /></div>
        <main className="mx-auto max-w-[1500px] p-4 sm:p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
