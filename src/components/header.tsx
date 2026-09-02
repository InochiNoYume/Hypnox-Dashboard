export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[var(--border)] bg-black/80 px-5 backdrop-blur-xl md:px-8">
      <div>
        <p className="text-sm font-medium text-white">Hypnox Studios</p>
        <p className="text-xs text-zinc-500">Panel de administración</p>
      </div>
      <div className="flex items-center gap-3 text-xs text-zinc-500">
        <span className="h-2 w-2 rounded-full bg-emerald-500" /> Sistema operativo
      </div>
    </header>
  );
}
