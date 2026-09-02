import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[var(--border)] bg-black/85 px-5 pl-16 backdrop-blur-xl md:px-8">
      <Link href="/" className="min-w-0 transition hover:opacity-80">
        <p className="truncate text-sm font-medium text-white">Hypnox Studios</p>
        <p className="truncate text-xs text-zinc-500">Panel de administración</p>
      </Link>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-full border border-zinc-900 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-500 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
          Repositorio preparado
        </div>
        <form action="/auth/signout" method="post">
          <button
            type="submit"
            className="rounded-lg border border-zinc-800 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          >
            Cerrar sesión
          </button>
        </form>
      </div>
    </header>
  );
}
