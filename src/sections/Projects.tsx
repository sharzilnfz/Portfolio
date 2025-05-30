import Image from 'next/image';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import xora from '@/assets/images/xora.png';
import movieSearch from '@/assets/images/movieSearch.png';
import promptEng from '@/assets/images/promptEng.png';
import CheckIcon from '@/assets/icons/CheckIcon.jsx';
import ArrowIcon from '@/assets/icons/ArrowIcon.jsx';

import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/card';

const portfolioProjects = [
  {
    company: 'FUll Stack',
    year: '2025',
    title: 'MovieSearch',
    results: [
      { title: 'React.Js' },
      { title: 'Tailwind CSS' },
      { title: 'Appwrite & TMDB API' },
    ],
    link: 'https://moviesearch-sharzil.netlify.app/',
    image: movieSearch,
  },
  {
    company: 'Frontend',
    year: '2025',
    title: 'Prompt Enginnering Guide',
    results: [
      { title: 'NextJs & TypeScipt' },
      { title: 'Tailwind CSS' },
      { title: 'Shadcn, Framer Motion, Lucide React & Zod ' },
    ],
    link: 'https://promptengineeringfordevs.netlify.app/',
    image: promptEng,
  },
  {
    company: 'Frontend',
    year: '2025',
    title: 'Xora - AI SaaS Landing Page',
    results: [
      { title: 'ReactJs' },
      { title: 'Tailwind CSS' },
      { title: 'Lucide React & Zod' },
    ],
    link: 'https://xora-ai-saas.netlify.app',
    image: xora,
  },
];
interface ProjectsSectionProps {
  id?: string;
}

export const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  return (
    <section id={id} className="py-16 lg:py-24 xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-World Results"
          description="See how I transformed concepts into engaging digital experiences"
        />

        <div className="mt-12 md:mt-16 lg:mt-20 space-y-16 md:space-y-20 lg:space-y-24">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 sticky top-16 shadow-lg hover:shadow-xl transition-shadow duration-300 pointer-events-none"
              style={{
                top: `calc(64px + ${
                  portfolioProjects.indexOf(project) * 40
                }px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center">
                <div className="space-y-6 md:space-y-8   lg:grid-cols-3">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                    <span className="text-sm sm:text-base font-bold uppercase tracking-widest">
                      {project.company}
                    </span>
                    <span className="text-sm sm:text-base">•</span>
                    <span className="text-sm sm:text-base font-bold uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-serif font-bold  leading-tight w-full">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/10" />

                  <div className="space-y-3 md:space-y-4 w-full">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-white/70 w-full"
                      >
                        <CheckIcon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="bg-white text-gray-950 h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-200 min-w-[200px]">
                        <span className="text-sm sm:text-base">
                          Visit Live Site
                        </span>
                        <ArrowIcon
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          style={undefined}
                        />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative lg:w-2/3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-auto lg:w-[800px] lg:max-w-none rounded-3xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
