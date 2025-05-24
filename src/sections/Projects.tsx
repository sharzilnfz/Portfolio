import Image from 'next/image';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import CheckIcon from '@/assets/icons/CheckIcon.jsx';
import ArrowIcon from '@/assets/icons/ArrowIcon.jsx';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/card';

const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container px-4">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-World Results"
          description="See how I transformed concepts into engaging digital experiences"
        />

        <div className="flex flex-col gap-20 mt-10 md:mt-20 items-center">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10  lg:pt-16 lg:px-20 pb-0"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-serif mt-2 md:mt-5 font-bold tracking-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className=" border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className=" mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="text-white/50 flex text-sm md:text-base items-center gap-2"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 px-6 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowIcon className="size-4" style={{}} />
                    </button>
                  </a>
                </div>

                <div>
                  <div className="relative  h-full">
                    {/* ✨ THE FIX IS HERE ✨ */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      width={1000} /* Add an appropriate width */
                      height={600} /* Add an appropriate height */
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
