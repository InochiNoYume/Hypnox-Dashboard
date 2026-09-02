'use client';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6"><section className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center"><p className="text-xs font-semibold tracking-[0.25em] text-zinc-600">HYPNOX DASHBOARD</p><h1 className="mt-4 text-2xl font-semibold">Algo salió mal</h1><p className="mt-3 text-sm leading-6 text-zinc-500">No se pudo cargar esta sección. Puedes intentar nuevamente.</p><button type="button" onClick={() => reset()} className="mt-7 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black">Intentar nuevamente</button></section></main>;
}
