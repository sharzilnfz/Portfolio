import type { Metadata } from 'next';
import { Inter, Calistoga, Space_Grotesk } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import localFont from 'next/font/local';
import './globals.css';
import { MouseAnimationProvider } from '@/contexts/MouseAnimationContext';

const auge = localFont({
  src: '../fonts/augeF/Auge-Trial-ExtraBold.otf',
  variable: '--font-auge',
  display: 'swap',
});

const sagfield = localFont({
  src: '../fonts/sagfield/sagfield-wpk7y.otf',
  variable: '--font-sagfield',
  display: 'swap',
});

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
          sagfield.variable,
          auge.variable,
          inter.variable,
          calistoga.variable,
          spaceGrotesk.variable,
          'bg-gray-900 text-white antialiased font-space-grotesk'
        )}
      >
        <MouseAnimationProvider>{children}</MouseAnimationProvider>
      </body>
    </html>
  );
}
