import { DashboardShell } from '@/components/dashboard-shell';
import { modules } from '@/lib/modules';

export default async function ModulePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const module = modules[slug[0]];

  if (!module) {
    return <DashboardShell><section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"><p className="text-xs tracking-[0.2em] text-zinc-600">HYPNOX DASHBOARD</p><h1 className="mt-3 text-3xl font-semibold">Módulo no encontrado</h1><p className="mt-3 text-sm text-zinc-500">La sección solicitada no existe.</p></section></DashboardShell>;
  }

  return (
    <DashboardShell>
      <section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-zinc-600">{module.eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{module.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">{module.description}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {module.metrics.map(([label, value, detail]) => (
          <article key={label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-xs text-zinc-500">{label}</p><p className="mt-3 text-2xl font-semibold">{value}</p><p className="mt-2 text-xs leading-5 text-zinc-600">{detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {module.sections.map((section) => (
          <article key={section.title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="font-medium">{section.title}</h2><p className="mt-2 text-sm leading-6 text-zinc-500">{section.description}</p>
            <ul className="mt-5 space-y-2">{section.items.map((item) => <li key={item} className="rounded-lg border border-zinc-900 bg-[var(--surface-2)] px-3 py-2.5 text-sm text-zinc-400">{item}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-xl border border-dashed border-zinc-800 p-5 text-sm leading-6 text-zinc-600">
        Datos reales y acciones administrativas se habilitarán al conectar Supabase y Discord. La interfaz no contiene credenciales ni secretos y está preparada para trabajar con permisos por servidor.
      </section>
    </DashboardShell>
  );
}
