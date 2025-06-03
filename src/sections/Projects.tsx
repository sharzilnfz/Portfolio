'use client';
import ArrowIcon from '@/assets/icons/ArrowIcon.jsx';

import CheckIcon from '@/assets/icons/CheckIcon.jsx';
import converso from '@/assets/images/converso.png';
import movieSearch from '@/assets/images/movieSearch.png';
import promptEng from '@/assets/images/promptEng.png';
import subscriptionTrackerImage from '@/assets/images/subscriptionTrackerImage.png';
import xora from '@/assets/images/xora.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/card';

const portfolioProjects = [
  {
    company: 'FUll Stack',
    year: '2025',
    title: 'SmartFlix',
    results: [
      { title: 'ReactJs' },
      { title: 'Tailwind CSS' },
      { title: 'Appwrite & TMDB API' },
    ],
    link: 'https://moviesearch-sharzil.netlify.app/',
    image: movieSearch,
    description:
      'A Movies and Tv Shows discovery platform built with React.js and powered by the TMDB API. Features include advanced search capabilities, detailed movie information, user ratings, and personalized watchlists. The application uses Appwrite for backend services including user authentication and data storage.',
    challenges: [
      'Implementing efficient API data fetching and caching',
      'Creating responsive UI components for different screen sizes',
      'Managing complex state for search filters and user preferences',
      'Optimizing performance for large datasets',
      'Ensuring a fast development environment with Vite',
      'Maintaining clean and maintainable code using React hooks and Tailwind CSS',
    ],
    features: [
      'Real-time movie search',
      'Detailed movie Cards',
      'Responsive design optimized for all devices',
      'Explore a wide range of Movies and Tv Shows available on the platform',
      'Easily search for specific Movies and Tv Shows using a search function',
      'Trending Algorithm: Displays trending Movies and Tv Shows based on a dynamic algorithm',
      'Modern UI/UX: A sleek and user-friendly interface designed for a great experience',
      'Responsiveness: Fully responsive design that works seamlessly across devices',
    ],
  },
  {
    company: 'Full Stack',
    year: '2025',
    title: 'Converso AI Tutors',
    results: [
      { title: 'Next.js & TypeScript' },
      { title: 'Supabase' },
      { title: 'Clerk, Vapi' },
    ],
    link: 'https://converso-rust.vercel.app/companions',
    image: converso, // Replace with actual image import
    description:
      'An LMS SaaS app built from scratch using Next.js, Supabase, and Stripe, featuring user authentication, subscriptions, and payments. It integrates real-time teaching with Vapi’s AI vocal agents for interactive learning sessions, delivering a seamless educational platform.',
    challenges: [
      'Integrating Vapi for low-latency AI voice interactions',
      'Managing secure authentication and subscriptions with Clerk',
      'Handling real-time data and storage with Supabase',
      'Ensuring cross-device compatibility with responsive design',
      'Implementing robust payment processing with Stripe',
      'Building a scalable architecture with Next.js and TypeScript',
    ],
    features: [
      'AI Voice Agents: Take tutoring sessions with voiced AIs specializing in chosen topics',
      'Authentication: Secure user sign-up and sign-in with Clerk, including Google authentication',
      'Billing & Subscriptions: Easily manage plans, upgrades, and payment details',
      'Code Reusability: Leveraged reusable components and a modular codebase',
      'Create a Tutor: Create AI tutors with customizable subjects, topics, and conversation styles',
      'Cross-Device Compatibility: Fully responsive design for all devices',
      'Database Integration: Uses Supabase for real-time data handling and storage',
      'Modern UI/UX: Clean, responsive design with Tailwind CSS and shadcn/ui',
      'Scalable Tech Stack: Built with Next.js for a fast, production-ready app',
      'Search Functionality: Find tutors quickly with robust filters and search bar',
    ],
  },
  {
    company: 'Backend',
    year: '2025',
    title: 'Subscription Tracker API',
    results: [
      { title: 'Node.js & Express.js' },
      { title: 'Arcjet, UpStash' },
      { title: 'MongoDB & Mongoose' },
    ],
    link: 'https://github.com/sharzilnfz/SubscriptionTracker-Api',
    image: subscriptionTrackerImage, // Replace with actual image import
    description:
      'A production-ready Subscription Management System API designed to handle real users, real money, and complex business logic. It authenticates users with JWTs, connects to a MongoDB database, and integrates seamlessly with frontend applications using a scalable architecture.',
    challenges: [
      'Implementing advanced rate limiting and bot protection with Arciet',
      'Designing robust database models and relationships using MongoDB & Mongoose',
      'Ensuring secure JWT authentication for user CRUD operations and subscription management',
      'Integrating global error handling and input validation middleware',
      'Setting up logging mechanisms for effective debugging and monitoring',
      'Automating smart email reminders with Upstash workflows',
    ],
    features: [
      'Advanced Rate Limiting and Bot Protection: Secures the entire app with Arciet',
      'Database Modeling: Models and relationships using MongoDB & Mongoose',
      'JWT Authentication: User CRUD operations and subscription management',
      'Global Error Handling: Input validation and middleware integration',
      'Logging Mechanisms: Better debugging and monitoring',
      'Email Reminders: Automating smart email reminders with Upstash workflows',
    ],
  },
  {
    company: 'Frontend',
    year: '2025',
    title: 'Prompt Enginnering Guide',
    results: [
      { title: 'NextJs & TypeScipt' },
      { title: 'Tailwind CSS' },
      { title: 'Shadcn, Framer Motion, Lucide React' },
    ],
    link: 'https://promptengineeringfordevs.netlify.app/',
    image: promptEng,
    description:
      'An interactive educational platform designed to teach developers the art of prompt engineering for AI systems. Built with Next.js and TypeScript, it features interactive examples, best practices, and real-world use cases to help developers master AI communication.',
    challenges: [
      'Creating interactive code examples with syntax highlighting',
      'Implementing smooth animations for enhanced user experience',
      'Building a comprehensive content management system',
      'Ensuring accessibility across all interactive components',
    ],
    features: [
      'Interactive prompt examples with live results',
      'Comprehensive guide covering various AI models',
      'Search functionality for quick navigation',
      'Mobile-first responsive design with smooth animations',
    ],
  },
  {
    company: 'Frontend',
    year: '2025',
    title: 'Xora AI',
    results: [
      { title: 'ReactJs' },
      { title: 'Tailwind CSS' },
      { title: 'Lucide React & Zod' },
    ],
    link: 'https://xora-ai-saas.netlify.app',
    image: xora,
    description:
      'A modern, conversion-optimized landing page for an AI SaaS platform. Features compelling storytelling, interactive elements, and a clean design that effectively communicates the value proposition of AI-powered solutions for businesses.',
    challenges: [
      'Creating engaging micro-interactions and animations',
      'Optimizing for high conversion rates',
      'Implementing pixel-perfect responsive design',
      'Building reusable component architecture',
      'Ensuring fast loading and optimized performance with Vite',
      'Managing complex CSS for fluid animations and gradient effects',
    ],
    features: [
      'Hero section with compelling value proposition',
      'Interactive feature demonstrations',
      'Testimonials and social proof sections',
      'Call-to-action optimization for maximum conversions',
      'Stunning Sections: Includes hero, features, pricing (monthly/yearly), FAQ, testimonials, and download software sections',
      'Smooth Animations: Complex CSS for fluid animations and eye-catching effects',
      'Cool CSS Gradients: Beautiful gradient effects using CSS before and after pseudo-elements',
      'Seamless Navigation: Offers a smooth user experience with intuitive navigation and scrolling',
      'Optimized Performance: Built for fast loading and an optimized experience',
      'Pixel Perfect Design: Ensures flawless responsiveness across all devices and screen sizes',
    ],
  },
];
interface ProjectsSectionProps {
  id?: string;
}

// Project Overlay Component
const ProjectOverlay = ({
  project,
  isOpen,
  onClose,
}: {
  project: (typeof portfolioProjects)[0];
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center   overflow-x: hidden;
"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto no-scrollbar">
        <Card className="p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <span className="text-white text-xl">×</span>
          </button>

          {/* Project Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-4">
              <span className="text-sm sm:text-base font-bold uppercase tracking-widest">
                {project.company}
              </span>
              <span className="text-sm sm:text-base">•</span>
              <span className="text-sm sm:text-base font-bold uppercase tracking-widest">
                {project.year}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-auge font-bold leading-tight mb-4">
              {project.title}
            </h2>

            <div className="relative mb-6">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl lg:mt-0 lg:h-auto"
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">
                About This Project
              </h3>
              <p className="text-white/70 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.results.map((result, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                  >
                    {result.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <CheckIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Challenges & Solutions
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <CheckIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <div className="pt-6 border-t border-white/10">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-gray-950 h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-200 min-w-[200px]">
                  <span className="text-sm sm:text-base">Visit Live Site</span>
                  <ArrowIcon
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={undefined}
                  />
                </button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioProjects)[0] | null
  >(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleLearnMore = (project: (typeof portfolioProjects)[0]) => {
    setSelectedProject(project);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedProject(null);
  };
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
              className="overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 sticky top-16 shadow-lg hover:shadow-xl transition-shadow duration-300 "
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

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-auge font-bold  leading-tight w-full">
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

                  <div className="pt-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                    <button
                      onClick={() => handleLearnMore(project)}
                      className="bg-transparent border-2 border-white/20 text-white h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:border-white/40 hover:bg-white/5 transition-all duration-200 w-auto sm:flex-none lg:w-auto"
                    >
                      <span className="text-sm sm:text-base">Learn More</span>
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-auto sm:flex-none lg:w-auto"
                    >
                      <button className="bg-white text-gray-950 h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-200 w-full">
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

      {/* Project Overlay */}
      {selectedProject && (
        <ProjectOverlay
          project={selectedProject}
          isOpen={isOverlayOpen}
          onClose={closeOverlay}
        />
      )}
    </section>
  );
};
