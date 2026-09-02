'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-[var(--border)] bg-[var(--surface)] p-5 md:block">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-[0.25em] text-white">HYPNOX</p>
        <p className="mt-1 text-sm text-[var(--muted)]">Dashboard</p>
      </div>
      <nav className="space-y-1">
        {navigation.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={`block rounded-lg px-3 py-2.5 text-sm transition ${active ? 'bg-white text-black' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'}`}>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-5 left-5 right-5 border-t border-[var(--border)] pt-4 text-xs text-zinc-600">Hypnox Studios · 2026</div>
    </aside>
  );
}
