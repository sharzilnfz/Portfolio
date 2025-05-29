import type { Metadata } from 'next';
import { Inter, Calistoga, Space_Grotesk } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: '600',
});

export const metadata: Metadata = {
  title: 'Sharzil Nafis',
  description: 'Unleashing Creative Code',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          spaceGrotesk.variable,
          'bg-gray-900 text-white antialiased font-sans '
        )}
      >
        {children}
      </body>
    </html>
  );
}
