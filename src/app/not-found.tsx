import Link from 'next/link';

export default function NotFound() {
  return <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6"><section className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center"><p className="text-xs font-semibold tracking-[0.25em] text-zinc-600">HYPNOX DASHBOARD</p><h1 className="mt-4 text-4xl font-semibold">404</h1><p className="mt-3 text-sm text-zinc-500">La página que buscas no existe.</p><Link href="/" className="mt-7 inline-block rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black">Volver al inicio</Link></section></main>;
}
