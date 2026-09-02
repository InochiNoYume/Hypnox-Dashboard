import Link from 'next/link';
import type { DashboardRole } from '@/lib/dashboard-access';

const roleLabels: Record<DashboardRole, string> = {
  founder: 'Founder',
  director: 'Director',
  administrative_assistant: 'Administrative Assistant',
  project_manager: 'Project Manager',
  department_lead: 'Department Lead',
};

export function Header({ role, discordUserId }: { role: DashboardRole; discordUserId: string | null }) {
  return (
    <header className="sticky top-0 z-20 flex min-h-16 items-center justify-between gap-4 border-b border-[var(--border)] bg-black/85 px-5 pl-16 backdrop-blur-xl md:px-8">
      <Link href="/" className="min-w-0 transition hover:opacity-80">
        <p className="truncate text-sm font-medium text-white">Hypnox Studios</p>
        <p className="truncate text-xs text-zinc-500">Panel de administración</p>
      </Link>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden min-w-0 items-center gap-2 rounded-full border border-zinc-900 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-500 sm:flex">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
          <span className="truncate">{roleLabels[role]}</span>
        </div>
        {discordUserId && <span className="hidden text-xs text-zinc-700 lg:inline">{discordUserId}</span>}
        <form action="/auth/signout" method="post">
          <button type="submit" className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-400 transition hover:border-zinc-600 hover:text-white">
            Cerrar sesión
          </button>
        </form>
      </div>
    </header>
  );
}
