# Hypnox Dashboard

Dashboard oficial de **Hypnox Studios** para administrar Hypnox Bot y sus tres servidores de Discord.

## Objetivo

El Dashboard será la capa web de administración sobre la misma plataforma de datos utilizada por Hypnox Bot. La aplicación centraliza moderación, soporte, eventos, premios, proyectos, postulaciones, configuración y auditoría.

## Servidores

- **Official** — comunidad pública.
- **Staff Team** — operación interna del equipo.
- **Applications** — proceso de incorporación de Staff.

## Módulos

- Inicio
- Servidores
- Moderación
- Tickets
- Eventos
- Premios
- Proyectos
- Postulaciones
- Logs
- Configuración

## Arquitectura

```text
Navegador
   │
   ▼
Next.js App Router
   │
   ├── UI / Server Components
   ├── Route Handlers
   └── Supabase SSR
           │
           ▼
       Supabase
           ▲
           │
      Hypnox Bot
```

Los secretos no deben enviarse al navegador. Las operaciones administrativas se realizarán desde el servidor y el acceso a los datos deberá respetar RLS y permisos por servidor.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Supabase Auth + Database
- Vercel

## Desarrollo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm start
```

## Variables de entorno

Copia `.env.example` a `.env.local` cuando llegue la etapa de conexión. **No subas `.env.local` ni secretos a GitHub.**

Las credenciales de Supabase, Discord OAuth2 y Vercel se configurarán después de terminar la implementación del repositorio.

## Integraciones pendientes

1. Supabase Auth y Database.
2. Discord OAuth2.
3. Autorización por roles/servidores.
4. Consultas y mutaciones reales contra las tablas de Hypnox Bot.
5. Conexión del proyecto con Vercel.
6. Dominio y variables de producción.

## API

`GET /api/health` devuelve un estado básico del servicio sin requerir credenciales.

## Seguridad

- Nunca utilizar `service_role` en componentes cliente.
- Las variables `NEXT_PUBLIC_*` se consideran públicas.
- Las acciones sensibles deben ejecutarse en servidor.
- RLS debe permanecer habilitado en las tablas expuestas.
- La autorización debe basarse en datos de servidor y no en información editable por el usuario.

## Estado actual

La interfaz, navegación responsive, módulos, vistas de servidores, pantalla de acceso, manejo de errores y endpoint de salud están preparados. La conexión con servicios externos se deja deliberadamente para la última etapa.
