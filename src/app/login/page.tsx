import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <section className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-2xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-zinc-500">HYPNOX STUDIOS</p>
        <h1 className="mt-4 text-2xl font-semibold">Acesso al Dashboard</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">El acceso estará protegido mediante autenticación y autorización por servidor. Las credenciales se configurarán después de terminar el repositorio.</p>
        <button type="button" disabled className="mt-7 w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-black opacity-50">Continuar con Discord</button>
        <Link href="/" className="mt-4 block text-center text-xs text-zinc-600 hover:text-zinc-300">Volver al inicio</Link>
      </section>
    </main>
  );
}
