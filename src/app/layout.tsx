import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hypnox Dashboard',
  description: 'Panel de administración de Hypnox Studios.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
