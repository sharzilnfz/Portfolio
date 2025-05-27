import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  {
    title: 'Github',
    href: 'https://github.com/sharzilnfz',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/NafisSharzil',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/sharzil_nafis/',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sharzil-n-72aaa0137/',
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="px-5">
        <div className="container px-4 relative z-10">
          <div className="border-t border-white/15 py-6 mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-white-400">
            <div>
              <p className="text-sm md:text-base text-white/30">
                © 2025. All rights reserved
              </p>
            </div>

            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm md:text-base hover:text-white transition-colors duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="pb-4 text-center">
        <h3 className="text-sm md:text-base text-white/25 font-medium select-none">
          ~ Sharzil Nafis ~
        </h3>
      </div>
    </footer>
  );
};
