import Link from 'next/link';
import { LoginForm } from './login-form';

export default function LoginPage() {
  return <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6"><section className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-2xl"><p className="text-xs font-semibold tracking-[0.25em] text-zinc-500">HYPNOX STUDIOS</p><h1 className="mt-4 text-2xl font-semibold">Acceso al Dashboard</h1><p className="mt-3 text-sm leading-6 text-zinc-500">Inicia sesión con Discord. La autorización final se comprobará contra los servidores y roles permitidos.</p><LoginForm /><Link href="/" className="mt-4 block text-center text-xs text-zinc-600 hover:text-zinc-300">Volver al inicio</Link></section></main>;
}
