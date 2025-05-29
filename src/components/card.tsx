import grainImage from '@/assets/images/grain.jpg';
import { forwardRef } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, children, ...other }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'bg-gray-800 rounded-3xl mb-8 relative z-0 overflow-hidden ' +
            "after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none " +
            // Optimized smooth transition
            'transition-all duration-200 ease-out ' +
            'will-change-transform transform-gpu ' +
            // Perfect hover state
            'hover:scale-[1.025] hover:shadow-2xl hover:shadow-black/40 ' +
            'hover:brightness-105 ' +
            // Active feedback
            'active:scale-[0.98] active:duration-200',
          className
        )}
        {...other}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${(grainImage as any).src ?? grainImage})`,
          }}
        ></div>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
