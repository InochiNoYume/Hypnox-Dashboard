import { Header } from './header';
import { Sidebar } from './sidebar';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />
      <div className="md:pl-64">
        <Header />
        <main className="mx-auto max-w-[1500px] p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
