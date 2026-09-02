import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <section className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-2xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-zinc-500">HYPNOX STUDIOS</p>
        <h1 className="mt-4 text-2xl font-semibold">Sin acceso al dashboard</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Tu cuenta está autenticada, pero no tiene permisos en la lista de acceso del panel.
        </p>
        <div className="mt-7 space-y-3">
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Cerrar sesión
            </button>
          </form>
          <Link
            href="/"
            className="block w-full rounded-lg border border-[var(--border)] px-4 py-3 text-center text-sm text-zinc-300 transition hover:bg-zinc-900"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
