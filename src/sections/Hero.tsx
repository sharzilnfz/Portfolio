import memojiImage from '@/assets/images/memoji-computer-s.png';
import Image from 'next/image';
// import ArrowDown from '@/assets/icons/arrow-down.svg';
import { ArrowDown } from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
    <>
      <div>
        <div className="container">
          <Image src={memojiImage} alt="Person" />
        </div>
        <div></div>
        <div>Available for new projects</div>
      </div>
      <h1>Building Exceptional User Experiences</h1>
      <p>
        I specialize in transforming ideas into stunning digital experiences.
        With a passion for design and building high-performance web
        applications.
      </p>
      <div>
        <button>
          <span>⬇</span>
          <span>Explore my work</span>
          {/* <ArrowDown /> */}
        </button>
        <button>
          <span>👋</span>
          <span>Let's connect</span>
        </button>
      </div>
    </>
  );
};
