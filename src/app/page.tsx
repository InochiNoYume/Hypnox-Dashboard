import { DashboardShell } from '@/components/dashboard-shell';
import { servers } from '@/lib/navigation';

const stats = [
  ['Servidores', '3', 'Official · Staff · Applications'],
  ['Módulos', '10', 'Arquitectura preparada'],
  ['Estado', 'Online', 'Dashboard inicial'],
  ['Base de datos', 'Supabase', 'Conexión por configurar'],
];

export default function Home() {
  return (
    <DashboardShell>
      <section className="mb-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-zinc-500">HYPNOX STUDIOS</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Centro de administración</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">Gestiona los servidores, moderación, tickets, eventos, premios, proyectos, postulaciones y registros desde un único panel.</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value, detail]) => (
          <article key={label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-xs text-zinc-500">{label}</p>
            <p className="mt-3 text-2xl font-semibold">{value}</p>
            <p className="mt-2 text-xs text-zinc-600">{detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between">
          <div><h2 className="text-lg font-semibold">Servidores</h2><p className="text-sm text-zinc-500">Entornos conectados a Hypnox Bot</p></div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {servers.map((server) => (
            <article key={server.id} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-zinc-700 transition">
              <div className="flex items-center justify-between"><h3 className="font-medium">{server.name}</h3><span className="h-2 w-2 rounded-full bg-emerald-500" /></div>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{server.description}</p>
              <p className="mt-5 text-xs uppercase tracking-wider text-zinc-600">{server.id}</p>
            </article>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
