import { Header } from './header';
import { MobileNav } from './mobile-nav';
import { Sidebar } from './sidebar';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />
      <div className="md:pl-64">
        <Header />
        <div className="fixed left-4 top-3 z-30 md:hidden"><MobileNav /></div>
        <main className="mx-auto max-w-[1500px] p-4 sm:p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
