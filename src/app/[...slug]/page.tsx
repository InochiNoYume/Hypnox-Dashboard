import Link from 'next/link';
import { DashboardShell } from '@/components/dashboard-shell';
import { modules } from '@/lib/modules';
import { servers } from '@/lib/navigation';

const serverDetails: Record<string, { title: string; description: string; access: string[] }> = {
  official: { title: 'Official', description: 'Comunidad pública de Hypnox Studios.', access: ['Información y anuncios', 'Actividades, dinámicas y eventos', 'Tickets, soporte y alianzas'] },
  staff: { title: 'Staff Team', description: 'Entorno privado para la operación del equipo.', access: ['Moderación y administración', 'Proyectos y departamentos', 'Logs y gestión interna'] },
  applications: { title: 'Applications', description: 'Entorno dedicado al proceso de incorporación de Staff.', access: ['Convocatorias', 'Postulaciones y estado', 'Resultados oficiales'] },
};

export default async function ModulePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug[0];

  if (key === 'servidores' && slug[1] && serverDetails[slug[1]]) {
    const server = serverDetails[slug[1]];
    return <DashboardShell><section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"><Link href="/servidores" className="text-xs text-zinc-600 hover:text-zinc-300">← Servidores</Link><p className="mt-5 text-xs font-semibold tracking-[0.22em] text-zinc-600">SERVIDOR</p><h1 className="mt-3 text-3xl font-semibold">{server.title}</h1><p className="mt-3 text-sm text-zinc-500">{server.description}</p></section><div className="grid gap-4 md:grid-cols-3">{server.access.map((item) => <article key={item} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-sm text-zinc-300">{item}</p><p className="mt-3 text-xs text-zinc-600">Preparado para integración</p></article>)}</div><div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"><h2 className="font-medium">Estado de conexión</h2><p className="mt-2 text-sm text-zinc-500">Discord y Supabase se conectarán en la etapa final, después de completar el repositorio.</p></div></DashboardShell>;
  }

  const module = modules[key];
  if (!module) return <DashboardShell><section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"><p className="text-xs tracking-[0.2em] text-zinc-600">HYPNOX DASHBOARD</p><h1 className="mt-3 text-3xl font-semibold">Módulo no encontrado</h1><p className="mt-3 text-sm text-zinc-500">La sección solicitada no existe.</p></section></DashboardShell>;

  return <DashboardShell><section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"><p className="text-xs font-semibold tracking-[0.22em] text-zinc-600">{module.eyebrow}</p><h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{module.title}</h1><p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">{module.description}</p></section><section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{module.metrics.map(([label, value, detail]) => <article key={label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"><p className="text-xs text-zinc-500">{label}</p><p className="mt-3 text-2xl font-semibold">{value}</p><p className="mt-2 text-xs leading-5 text-zinc-600">{detail}</p></article>)}</section><section className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">{module.sections.map((section) => <article key={section.title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"><h2 className="font-medium">{section.title}</h2><p className="mt-2 text-sm leading-6 text-zinc-500">{section.description}</p><ul className="mt-5 space-y-2">{section.items.map((item) => <li key={item} className="rounded-lg border border-zinc-900 bg-[var(--surface-2)] px-3 py-2.5 text-sm text-zinc-400">{item}</li>)}</ul></article>)}</section><section className="mt-6 rounded-xl border border-dashed border-zinc-800 p-5 text-sm leading-6 text-zinc-600">La interfaz está completa a nivel de arquitectura. Los datos reales y las acciones administrativas se activarán después de configurar las conexiones, sin exponer secretos al navegador.</section></DashboardShell>;
}
