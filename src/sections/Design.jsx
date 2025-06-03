import grainImage from '@/assets/images/grain.jpg';
import { ArrowUpRight } from 'lucide-react';

const Design = () => {
  return (
    <section className="flex items-center justify-center max-w-2xl mx-auto px-4 md:px-10 lg:px-20 rounded-xl mt-10">
      <a
        href="https://drive.google.com/drive/folders/1H9-yAELRsK6t3k6SI_urNUlEHX52oDr1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl py-4 px-20 text-center relative overflow-hidden w-full items-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ">
          {/* Grain texture background */}
          <div
            className=" inset-0 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src ?? grainImage})`,
            }}
          ></div>

          {/* Content */}
          <div className="relative flex items-center justify-center gap-2 text-slate-800 font-auge text-base lg:text-2xl sm:text-xl md:text-xl max-w-3xl mx-auto z-10 group whitespace-nowrap">
            Explore few of my Graphic Design projects
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0" />
          </div>
        </div>
      </a>
    </section>
  );
};

export default Design;
