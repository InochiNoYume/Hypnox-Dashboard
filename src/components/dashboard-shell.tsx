import { redirect } from 'next/navigation';
import { getDashboardAccess } from '@/lib/dashboard-access';
import { Header } from './header';
import { MobileNav } from './mobile-nav';
import { Sidebar } from './sidebar';

export async function DashboardShell({ children }: { children: React.ReactNode }) {
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
