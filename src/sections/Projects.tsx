import Image from 'next/image';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import CheckIcon from '@/assets/icons/CheckIcon.jsx';
import ArrowIcon from '@/assets/icons/ArrowIcon.jsx';

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
    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-5">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4">
          See how I transformed concepts into engaging digital experiences
        </p>
      </div>
      {/* MODIFICATION: Added 'items-center' to center the cards horizontally */}
      <div className="flex flex-col items-center gap-20 mt-10">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            /* MODIFICATION: Added 'w-full' and 'max-w-md' to constrain card width */
            className="w-full max-w-md bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:rounded-3xl after:-outline-offset-2 after:outline-white/20 px-8 pt-8"
          >
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <span>{project.company}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <h3 className="text-2xl font-serif mt-2 font-bold tracking-tight">
              {project.title}
            </h3>
            <hr className="border-t-2/5 mt-4" />
            <ul className="space-y-2 mt-4 flex flex-col gap-4">
              {project.results.map((result) => (
                <li
                  key={result.title}
                  className="text-white/50 flex text-sm items-center gap-2"
                >
                  <CheckIcon className="size-5" />
                  {result.title}
                </li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>Visit Live Site</span>
                <ArrowIcon className="size-4" />
              </button>
            </a>

            <div className="">
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-8"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
