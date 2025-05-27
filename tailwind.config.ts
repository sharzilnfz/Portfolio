import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // add other paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        merriweather: ['var(--font-merriweather)'],
      },
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      },
      keyframes: {
        'move-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'move-right': {
          '0%': { transform: 'translateX(-50%)' }, // Start from left
          '100%': { transform: 'translateX(0%)' }, // Move to original position
        },
        'ping-large': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '75%': {
            transform: 'scale(3)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0',
          },
        },
      },
    },
  },
};

export default config;
