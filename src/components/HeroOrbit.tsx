import { PropsWithChildren } from 'react';

interface HeroOrbitProps {
  size: number;
  rotation: number;
  spinDuration?: string;
}

export const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDuration = '20s',
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className="animate-spin"
        style={{
          animationDuration: spinDuration,
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
          <div
            className="animate-spin"
            style={{
              animationDuration: spinDuration,
              animationDirection: 'reverse',
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
