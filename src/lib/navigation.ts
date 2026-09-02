export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Servidores', href: '/servidores' },
  { label: 'Moderación', href: '/moderacion' },
  { label: 'Tickets', href: '/tickets' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Premios', href: '/premios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Postulaciones', href: '/postulaciones' },
  { label: 'Logs', href: '/logs' },
  { label: 'Configuración', href: '/configuracion' },
] as const;

export const servers = [
  { id: 'official', name: 'Official', description: 'Comunidad pública de Hypnox Studios' },
  { id: 'staff', name: 'Staff Team', description: 'Gestión interna del equipo' },
  { id: 'applications', name: 'Applications', description: 'Proceso de postulaciones' },
] as const;
