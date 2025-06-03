import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import CoreValues3D from '@/sections/CoreValues3D';
import Design from '@/sections/Design';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection id="home" />
      <CoreValues3D />
      {/* {<Bio />} */}
      <ProjectsSection id="projects" />
      <Design />

      <TapeSection />
      {/* <TestimonialsSection /> */}
      <AboutSection id="about" />
      <ContactSection />
      <Footer />
    </>
  );
}
