import type { Metadata } from 'next';
import {
  Inter,
  Calistoga,
  Playfair_Display,
  Merriweather,
  Montserrat,
  Poppins,
} from 'next/font/google';
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

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '600',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '600',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created with the help of Frontend Tribe',
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
          playfair.variable,
          merriweather.variable,
          montserrat.variable,
          poppins.variable,
          'bg-gray-900 text-white antialiased font-sans'
        )}
      >
        {children}
      </body>
    </html>
  );
}
