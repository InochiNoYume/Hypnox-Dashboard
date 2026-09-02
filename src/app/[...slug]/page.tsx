import { DashboardShell } from '@/components/dashboard-shell';

const titles: Record<string, [string, string]> = {
  servidores: ['Servidores', 'Gestiona los tres servidores de Hypnox Studios.'],
  moderacion: ['Moderación', 'Historial, sanciones, advertencias y herramientas de moderación.'],
  tickets: ['Tickets', 'Consulta y administra el sistema central de soporte.'],
  eventos: ['Eventos', 'Crea, organiza y controla eventos de Hypnox Studios.'],
  premios: ['Premios', 'Gestiona sorteos, recompensas y ganadores.'],
  proyectos: ['Proyectos', 'Planificación y seguimiento de proyectos internos.'],
  postulaciones: ['Postulaciones', 'Seguimiento del proceso de incorporación de Staff.'],
  logs: ['Logs', 'Registro centralizado de actividad y acciones administrativas.'],
  configuracion: ['Configuración', 'Ajustes generales, permisos e integraciones.'],
};

export default async function ModulePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug[0];
  const [title, description] = titles[key] ?? ['Módulo', 'Sección del Dashboard de Hypnox Studios.'];

  return (
    <DashboardShell>
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-zinc-600">HYPNOX DASHBOARD</p>
        <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">{description}</p>
        <div className="mt-8 rounded-xl border border-dashed border-zinc-800 p-6 text-sm text-zinc-600">
          Este módulo está preparado en la arquitectura inicial. La conexión con Supabase y Discord se incorporará aquí sin exponer credenciales al navegador.
        </div>
      </section>
    </DashboardShell>
  );
}
