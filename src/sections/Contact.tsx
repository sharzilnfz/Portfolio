import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <section className="flex items-center justify-center px-10 md:px-20">
      <div className="container">
        {/* Main Content Card */}
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl py-8 px-6 md:py-10 md:px-12 text-center lg:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${(grainImage as any).src ?? grainImage})`,
            }}
          ></div>
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-white/10 opacity-50"></div>

          <div className="relative z-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
            {/* Text Content */}
            <div className="lg:flex-1">
              {/* Main Heading */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-slate-800 mb-2 md:mb-4 lg:mb-2">
                Let's create something
                <br />
                amazing together
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-700 mb-2 md:mb-4 lg:mb-0 max-w-sm md:max-w-lg lg:max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            {/* Contact Button */}
            <div className="lg:flex-shrink-0">
              <a
                href="https://w.app/nafisx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group bg-slate-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto lg:mx-0 text-sm md:text-lg">
                  Contact Me
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
