export type ModuleDefinition = {
  title: string;
  description: string;
  eyebrow: string;
  metrics: Array<[string, string, string]>;
  sections: Array<{ title: string; description: string; items: string[] }>;
};

export const modules: Record<string, ModuleDefinition> = {
  servidores: {
    title: 'Servidores', eyebrow: 'INFRAESTRUCTURA', description: 'Vista central de los tres entornos de Hypnox Studios.',
    metrics: [['Servidores', '3', 'Official · Staff · Applications'], ['Activos', '3', 'Configuración preparada'], ['Bot', 'Online', 'Estado en tiempo real al conectar Discord']],
    sections: [
      { title: 'Official', description: 'Comunidad pública.', items: ['Información y anuncios', 'Actividades y eventos', 'Tickets y soporte'] },
      { title: 'Staff Team', description: 'Operación interna.', items: ['Moderación y gestión', 'Proyectos y departamentos', 'Registros administrativos'] },
      { title: 'Applications', description: 'Proceso de incorporación.', items: ['Convocatorias', 'Postulaciones', 'Resultados'] },
    ],
  },
  moderacion: {
    title: 'Moderación', eyebrow: 'SEGURIDAD', description: 'Control de sanciones, advertencias y acciones administrativas.',
    metrics: [['Advertencias', '—', 'Se mostrará al conectar Supabase'], ['Acciones', '—', 'Historial centralizado'], ['Estado', 'Protegido', 'Permisos por servidor']],
    sections: [{ title: 'Herramientas', description: 'Acciones previstas para el equipo autorizado.', items: ['/ban · /kick · /timeout', '/warn · /warnings · /unwarn', '/clear · /slowmode'] }, { title: 'Historial', description: 'Auditoría de acciones.', items: ['Moderador y objetivo', 'Motivo y duración', 'Fecha y metadatos'] }],
  },
  tickets: {
    title: 'Tickets', eyebrow: 'SOPORTE', description: 'Administración del sistema central de soporte de Official.',
    metrics: [['Abiertos', '—', 'Datos de Supabase'], ['Asignados', '—', 'Seguimiento de Staff'], ['Cerrados', '—', 'Historial y motivo']],
    sections: [{ title: 'Tipos', description: 'Categorías disponibles.', items: ['Soporte', 'Reporte', 'Alianza / Partner', 'Contacto', 'Bugs / Errores'] }, { title: 'Operación', description: 'Flujo del ticket.', items: ['Reclamar', 'Atender', 'Cerrar con motivo', 'Registrar en logs'] }],
  },
  eventos: {
    title: 'Eventos', eyebrow: 'COMUNIDAD', description: 'Planificación y seguimiento de eventos de Hypnox Studios.',
    metrics: [['Próximos', '—', 'Calendario conectado'], ['Activos', '—', 'Seguimiento en vivo'], ['Finalizados', '—', 'Historial']],
    sections: [{ title: 'Gestión', description: 'Ciclo completo del evento.', items: ['Crear y editar', 'Iniciar y finalizar', 'Cancelar'] }, { title: 'Resultados', description: 'Participación y cierre.', items: ['Participantes', 'Resultados', 'Ganadores y premios'] }],
  },
  premios: {
    title: 'Premios', eyebrow: 'RECOMPENSAS', description: 'Sorteos, recompensas y control de ganadores.',
    metrics: [['Activos', '—', 'Sorteos en curso'], ['Ganadores', '—', 'Historial'], ['Estado', 'Preparado', 'Gestión desde Dashboard']],
    sections: [{ title: 'Sorteos', description: 'Administración de giveaways.', items: ['Crear', 'Finalizar', 'Reroll', 'Consultar participantes'] }, { title: 'Historial', description: 'Trazabilidad.', items: ['Premio', 'Ganadores', 'Fecha de finalización'] }],
  },
  proyectos: {
    title: 'Proyectos', eyebrow: 'PRODUCCIÓN', description: 'Planificación interna de proyectos y tareas de Hypnox Studios.',
    metrics: [['Proyectos', '—', 'Base compartida'], ['En curso', '—', 'Seguimiento'], ['Tareas', '—', 'Pendientes y completadas']],
    sections: [{ title: 'Gestión', description: 'Organización del trabajo.', items: ['Crear proyecto', 'Asignar responsables', 'Cambiar estado'] }, { title: 'Equipo', description: 'Roles de coordinación.', items: ['Project Manager', 'Department Lead', 'Departamentos'] }],
  },
  postulaciones: {
    title: 'Postulaciones', eyebrow: 'STAFF', description: 'Control del proceso de incorporación del equipo.',
    metrics: [['Estado', '—', 'Convocatoria actual'], ['Pendientes', '—', 'Revisión'], ['Resultados', '—', 'Historial']],
    sections: [{ title: 'Proceso', description: 'Flujo definido para Applications.', items: ['Convocatoria', 'Postulación', 'Revisión', 'Evaluación', 'Decisión', 'Resultado', 'Incorporación'] }, { title: 'Reglas', description: 'Criterios administrativos.', items: ['Resultados oficiales', 'Confidencialidad', 'Requisitos no garantizan aceptación'] }],
  },
  logs: {
    title: 'Logs', eyebrow: 'AUDITORÍA', description: 'Registro unificado de actividad de Hypnox Bot.',
    metrics: [['Registros', '—', 'Supabase'], ['Categorías', '8', 'Moderación · Ticket · Evento · Giveaway · Application · Interview · Administration · System'], ['Retención', '—', 'Configuración pendiente']],
    sections: [{ title: 'Categorías', description: 'Clasificación central.', items: ['Moderación', 'Ticket', 'Evento', 'Giveaway', 'Application', 'Interview', 'Administration', 'System'] }, { title: 'Detalle', description: 'Cada entrada puede conservar actor, objetivo, canal, mensaje y metadatos.', items: ['Actor', 'Objetivo', 'Acción', 'Fecha'] }],
  },
  configuracion: {
    title: 'Configuración', eyebrow: 'SISTEMA', description: 'Configuración segura de servidores, permisos e integraciones.',
    metrics: [['Discord', 'Pendiente', 'OAuth + API'], ['Supabase', 'Pendiente', 'Auth + Database'], ['Vercel', 'Pendiente', 'Deploy']],
    sections: [{ title: 'Aplicación', description: 'Preferencias del Dashboard.', items: ['URL pública', 'Sesiones', 'Modo mantenimiento'] }, { title: 'Permisos', description: 'Autorización por servidor y rol.', items: ['Founder', 'Director', 'Administrative Assistant', 'Project Manager / Department Lead'] }, { title: 'Integraciones', description: 'Conexiones que se configurarán al final.', items: ['Supabase', 'Discord OAuth2', 'Hypnox Bot', 'Vercel'] }],
  },
};
