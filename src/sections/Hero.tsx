import memojiImage from '@/assets/images/memoji-computer-s.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarSvg from '@/assets/icons/star.jsx';
import Sparkle from '@/assets/icons/Sparkle.jsx';

import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    // 1. Add overflow-x-hidden HERE to the outermost container.
    // 2. Ensure it's 'relative' so the absolute children position correctly.
    //    (It already has 'relative' by default if no other position is set,
    //     but adding it explicitly can be clearer and safer).
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-hidden">
      {/* This div contains all your decorative, absolutely positioned elements */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero_ring"></div>
        <div className="hero_ring size-[820px]"></div>
        <div className="hero_ring size-[1020px]"></div>
        <div className="hero_ring size-[1220px]"></div>

        <HeroOrbit size={430} rotation={-14} spinDuration="47s">
          <Sparkle className="size-8 animate-pulse text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} spinDuration="23s">
          <Sparkle className="size-8 animate-pulse text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} spinDuration="61s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} spinDuration="34s">
          <Sparkle className="size-8 animate-pulse text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} spinDuration="29s">
          <StarSvg className="size-12 animate-pulse text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} spinDuration="41s">
          <StarSvg className="size-8 animate-pulse text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} spinDuration="53s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} spinDuration="19s">
          <Sparkle className="size-8 animate-pulse text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} spinDuration="37s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} spinDuration="67s">
          <StarSvg className="size-28 text-emerald-300 first-line: animate-pulse" />
        </HeroOrbit>
      </div>

      {/* This is your main content area, which should not be affected by the overflow fix */}
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person" />
          <div className="bg-gray-950 border-gray-800 border-2 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg shadow-md">
            {/* Use a simple container that is 'relative' to position the dot and the ping */}
            <div className="relative flex items-center justify-center size-2.5">
              {/* The ping animation div. It's now a sibling to the dot. */}
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>

              {/* The visible green dot. Also positioned absolutely to center it perfectly. */}
              <div className="bg-green-500 absolute inset-0 rounded-full"></div>
            </div>

            <div className="text-sm font-medium text-white-900">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl text-center font-bold mt-8 tracking-tight text-white bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,255,128,0.35)]">
            Building Exceptional User Experiences
          </h1>

          <p className="text-center text-white/60 mt-4 md:text-lg">
            I specialize in transforming ideas into stunning digital
            experiences. With a passion for design and building high-performance
            web applications.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-8 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="relative z-10 font-semibold">Explore My Work</span>
            <Image src={ArrowDown} alt="ArrowDown" className="invert" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span className=""></span>
            <span className="text-2xl animate-[wave_0.5s_ease-in-out_infinite]">
              ✌️
            </span>
            <span className="relative z-10 font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
