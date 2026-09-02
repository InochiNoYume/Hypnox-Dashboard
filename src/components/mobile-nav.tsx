'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/navigation';

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button type="button" aria-label="Abrir navegación" onClick={() => setOpen(true)} className="rounded-lg border border-[var(--border)] p-2 text-zinc-300 hover:bg-zinc-900">
        <Menu size={18} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <aside className="h-full w-[min(85vw,320px)] border-r border-[var(--border)] bg-[var(--surface)] p-5" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div><p className="text-xs font-semibold tracking-[0.25em]">HYPNOX</p><p className="mt-1 text-sm text-[var(--muted)]">Dashboard</p></div>
              <button type="button" aria-label="Cerrar navegación" onClick={() => setOpen(false)} className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-900 hover:text-white"><X size={18} /></button>
            </div>
            <nav className="mt-8 space-y-1">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-2.5 text-sm ${active ? 'bg-white text-black' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'}`}>{item.label}</Link>;
              })}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}
