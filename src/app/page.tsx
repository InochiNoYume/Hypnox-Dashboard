import Link from 'next/link';
import { DashboardShell } from '@/components/dashboard-shell';
import { navigation, servers } from '@/lib/navigation';

const stats = [
  ['Servidores', '3', 'Official · Staff · Applications'],
  ['Módulos', String(navigation.length), 'Centro administrativo'],
  ['Estado', 'Preparado', 'Conexión pendiente'],
  ['Seguridad', 'RLS', 'Autorización prevista por servidor'],
];

export default function Home() {
  return (
    <DashboardShell>
      <section className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-9">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />
        <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-zinc-500">HYPNOX STUDIOS</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Centro de administración</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">Un único panel para administrar Hypnox Bot y sus tres servidores: comunidad, Staff Team y Applications.</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-500">{['Moderación', 'Tickets', 'Eventos', 'Premios', 'Proyectos', 'Postulaciones', 'Logs'].map((item) => <span key={item} className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5">{item}</span>)}</div>
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(([label, value, detail]) => <article key={label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-zinc-500">{label}</p><p className="mt-3 text-2xl font-semibold">{value}</p><p className="mt-2 text-xs leading-5 text-zinc-600">{detail}</p></article>)}</section>
      <section className="mt-8"><div className="mb-4"><h2 className="text-lg font-semibold">Servidores</h2><p className="text-sm text-zinc-500">Entornos que compartirán la misma plataforma de administración.</p></div><div className="grid gap-4 lg:grid-cols-3">{servers.map((server) => <Link href={`/servidores/${server.id}`} key={server.id} className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-zinc-700"><div className="flex items-center justify-between"><h3 className="font-medium">{server.name}</h3><span className="h-2 w-2 rounded-full bg-zinc-600 transition group-hover:bg-white" /></div><p className="mt-2 text-sm leading-6 text-zinc-500">{server.description}</p><p className="mt-5 text-xs uppercase tracking-wider text-zinc-600">Abrir servidor →</p></Link>)}</div></section>
    </DashboardShell>
  );
}
