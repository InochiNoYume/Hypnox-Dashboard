'use client';

import { useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';

export function LoginForm({ nextPath }: { nextPath: string }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function signIn() {
    setLoading(true);
    setMessage('');
    const supabase = createSupabaseBrowserClient();
    const safeNext = nextPath.startsWith('/') && !nextPath.startsWith('//') ? nextPath : '/';
    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(safeNext)}`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: { redirectTo },
    });

    if (error) {
      setMessage('No fue posible iniciar sesión. Revisa la configuración de acceso e inténtalo nuevamente.');
      setLoading(false);
    }
  }

  return (
    <div>
      <button type="button" onClick={signIn} disabled={loading} className="mt-7 w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50">
        {loading ? 'Conectando…' : 'Continuar con Discord'}
      </button>
      {message && <p role="alert" className="mt-4 text-center text-xs leading-5 text-zinc-500">{message}</p>}
    </div>
  );
}
