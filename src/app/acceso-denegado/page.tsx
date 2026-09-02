import Link from 'next/link';

export default function AccessDeniedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <section className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] text-zinc-600">HYPNOX DASHBOARD</p>
        <h1 className="mt-4 text-3xl font-semibold">Acceso no autorizado</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Tu cuenta de Discord está autenticada, pero no tiene un acceso activo al Dashboard.
          Solicita al equipo de Dirección que habilite tu cuenta.
        </p>
        <Link href="/login" className="mt-7 inline-block rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200">
          Volver al acceso
        </Link>
      </section>
    </main>
  );
}
