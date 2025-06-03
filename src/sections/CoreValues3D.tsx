'use client';

import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const CoreValues3D = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const coreValues = [
    {
      title: 'Speed',
      description:
        'I attack every challenge with complete focus and energy, believing that swift action creates momentum',
      color: 0x64ffda,
    },
    {
      title: 'Efficiency',
      description:
        'I naturally seek the smartest path forward, maximizing impact while respecting time and resources',
      color: 0x7c4dff,
    },
    {
      title: 'Learning',
      description:
        "Learning fuels my soul - I'm constantly curious and driven to understand deeper layers of everything I encounter",
      color: 0xff6b6b,
    },
    {
      title: 'Creativity',
      description:
        'I see possibilities where others see problems, always looking for fresh perspectives and innovative approaches',
      color: 0xffd93d,
    },
    {
      title: 'Ownership',
      description:
        "When something is entrusted to me, I treat it as genuinely mine - with the same care, dedication, and responsibility I'd give my own",
      color: 0x6bcf7f,
    },
    {
      title: 'Outperform',
      description:
        'I believe in going the extra mile because I genuinely care about making a meaningful difference in everything I touch',
      color: 0xff8a65,
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="container">
        <SectionHeader
          eyebrow="My Principles"
          title="Core Values"
          description="The principles that drive everything I do"
        />

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-6 bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-xl hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-4 h-4 rounded-full mr-3 animate-pulse"
                  style={{
                    backgroundColor: `#${value.color
                      .toString(16)
                      .padStart(6, '0')}`,
                  }}
                />
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                  hoveredValue === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-10"
                  style={{
                    background: `linear-gradient(45deg, #${value.color
                      .toString(16)
                      .padStart(6, '0')}, transparent)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues3D;
