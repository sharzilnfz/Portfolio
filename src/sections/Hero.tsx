import memojiImage from '@/assets/images/memoji-computer-s.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarSvg from '@/assets/icons/star.jsx';
import Sparkle from '@/assets/icons/Sparkle.jsx';
import { HeroOrbit } from '@/components/HeroOrbit';
import ArrowIcon from '@/assets/icons/ArrowIcon';

// Define the props interface
interface HeroSectionProps {
  id?: string;
}

export const HeroSection = ({ id }: HeroSectionProps) => {
  return (
    <div
      id={id} // Add the id prop here
      className="py-36 md:py-48 lg:py-56 relative z-0 overflow-hidden"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero_ring"></div>
        <div className="hero_ring size-[820px]"></div>
        <div className="hero_ring size-[1020px]"></div>
        <div className="hero_ring size-[1220px]"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          orbitDuration="47s"
          spinDuration="12s"
        >
          <Sparkle className="size-8 animate-pulse text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          orbitDuration="23s"
          spinDuration="38s"
        >
          <Sparkle className="size-8 animate-pulse text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          orbitDuration="61s"
          spinDuration="7s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          orbitDuration="34s"
          spinDuration="26s"
        >
          <Sparkle className="size-8 animate-pulse text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          orbitDuration="29s"
          spinDuration="4s"
        >
          <StarSvg className="size-12 animate-pulse text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          orbitDuration="41s"
          spinDuration="15s"
        >
          <StarSvg className="size-8 animate-pulse text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          orbitDuration="53s"
          spinDuration="31s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          orbitDuration="19s"
          spinDuration="52s"
        >
          <Sparkle className="size-8 animate-pulse text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          orbitDuration="37s"
          spinDuration="9s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          orbitDuration="67s"
          spinDuration="21s"
        >
          <StarSvg className="size-28 text-emerald-300 first-line: animate-pulse" />
        </HeroOrbit>
      </div>

      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person" />
          <div className="bg-gray-950 border-gray-800 border-2 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg shadow-md">
            <div className="relative flex items-center justify-center size-2.5">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              <div className="bg-green-500 absolute inset-0 rounded-full"></div>
            </div>
            <div className="text-sm font-medium text-white-900">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-auge text-4xl md:text-6xl text-center font-bold mt-8">
            Building Exceptional User Experiences
          </h1>
          <p className="text-center text-white/60 mt-4 md:text-lg">
            I specialize in transforming ideas into stunning digital
            experiences. With a passion for design and building high-performance
            web applications.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-8 md:flex-row justify-center">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 font-semibold">
                Explore My Work
              </span>
              <ArrowDown />
            </button>
          </a>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="text-2xl animate-[wave_0.5s_ease-in-out_infinite]">
              ✌️
            </span>
            <a
              href="https://w.app/nafisx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 font-semibold">Let's Connect</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
