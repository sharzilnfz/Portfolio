import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from '@/components/SectionHeader';

const Design = () => {
  return (
    <section className="flex items-center justify-center px-10 md:px-20">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl py-4 px-20 text-center relative overflow-hidden">
        {/* Grain texture background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src ?? grainImage})`,
          }}
        ></div>

        {/* Button */}
        <a
          href="https://drive.google.com/drive/folders/1H9-yAELRsK6t3k6SI_urNUlEHX52oDr1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group bg-slate-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto text-sm md:text-lg ">
            Explore my Design work
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Design;
