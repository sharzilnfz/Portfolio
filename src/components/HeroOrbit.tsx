import { PropsWithChildren } from 'react';

interface HeroOrbitProps {
  size: number;
  rotation: number;
  orbitDuration?: string; // Speed of orbital movement around center
  spinDuration?: string; // Speed of self-rotation on own axis
}

export const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration = '20s',
  spinDuration = '10s',
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      {/* Orbital rotation around center */}
      <div
        className="animate-spin"
        style={{
          animationDuration: orbitDuration,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          {/* Self-rotation on own axis */}
          <div
            className="animate-spin"
            style={{
              animationDuration: spinDuration,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${-rotation}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
