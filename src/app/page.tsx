import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';

// import { Footer } from '@/components/Footer';
// import { Sidebar } from '@/components/Sidebar';
// import { MainContent } from '@/components/MainContent';
// import { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ReactNode } from 'react';
// import { cn } from '@/lib/utils';
// import { Toaster } from '@/components/ui/toaster';
// import { ThemeProvider } from '@/components/theme-provider';
// import { Analytics } from '@vercel/analytics/react';
// import { Providers } from '@/components/Providers';
// import { useTheme } from 'next-themes';
// import { useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import { useSession } from 'next-a uth/react';
// import { useTranslation } from 'react-i18next';
// import { useTranslation as useTranslationNext } from 'next-i18next';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
