'use client';
import ChromeIcon from '@/assets/icons/chrome.svg';
import CssIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import bookImage from '@/assets/images/book-cover.avif';
import mapImage from '@/assets/images/map.avif';
import smile from '@/assets/images/smile.png';
import { Card } from '@/components/card';
import { CardHeader } from '@/components/cardHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { ToolBoxItems } from '@/components/ToolBoxItems';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const hobbies = [
  { title: 'Coding', emoji: '💻', left: '5%', top: '5%' },
  { title: 'Eating', emoji: '🍖', left: '40%', top: '5%' },
  { title: 'Learning', emoji: '📖', left: '70%', top: '30%' },
  { title: 'Graphic Design', emoji: '🎨', left: '10%', top: '35%' },
  { title: 'Photography', emoji: '📸', left: '35%', top: '50%' },
  { title: 'Reading', emoji: '📚', left: '5%', top: '65%' },
  { title: 'Fitness', emoji: '🏋️', left: '60%', top: '70%' },
];

const toolBoxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },

  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

interface AboutSectionProps {
  id?: string;
}

export const AboutSection = ({ id }: AboutSectionProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div id={id} className="py-20 lg:py-28 px-2 md:px-4">
      <div className="container">
        <SectionHeader
          title={'A Glimpse Into My World'}
          eyebrow={'About Me'}
          description={
            'Learn more about who I am, What I do, and What Inspires me.'
          }
        />

        <div className="mt-20 flex flex-col gap-2 md:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 md:gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <a
                href="https://www.notion.so/Books-1ffb7399daf9803483b2ffd3d6d50c24?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />

                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <img src={bookImage.src} alt="Book cover" className="" />
                </div>
              </a>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the  tools and technologies I use to craft exceptional
              digital experiences."
              />

              <ToolBoxItems
                items={toolBoxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                // style={{ animationDuration: '50s' }}
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName=" animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Becond the code"
                description="Explore my interests, hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                      // transform: 'translate(-50%, -50%)',
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className=" font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span className="text-2xl">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <a
                href="https://maps.app.goo.gl/vpAHMGktqAdWhCkZ6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={mapImage}
                  alt="Map of my journey"
                  className="h-full w-full object-cover -translate-y-0.5 object-left-top "
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 -z-10"> */}
                  <Image
                    src={smile}
                    className="size-20"
                    alt="Map of my journey"
                  />
                </div>
              </a>
              {/* </div> */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
