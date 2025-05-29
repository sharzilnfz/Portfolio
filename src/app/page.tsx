import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { TestimonialsSection } from '@/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection id="home" />
      <ProjectsSection id="projects" />
      <TapeSection />
      {/* <TestimonialsSection /> */}
      <AboutSection id="about" />
      <ContactSection />
      <Footer />
    </>
  );
}
