'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useMousePosition } from '@/utils/useMousePosition';
import { motion } from 'framer-motion';

interface MouseAnimationContextType {
  x: number;
  y: number;
  size: number;
}

const MouseAnimationContext = createContext<
  MouseAnimationContextType | undefined
>(undefined);

export function MouseAnimationProvider({ children }: { children: ReactNode }) {
  const { x, y } = useMousePosition();
  const size = 40;

  return (
    <MouseAnimationContext.Provider value={{ x, y, size }}>
      {children}
      <motion.div
        className="mask"
        animate={{ WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px` }}
        transition={{ type: 'tween', ease: 'backOut' }}
        style={{
          position: 'fixed',
          width: size,
          height: size,
          pointerEvents: 'none',
        }}
      />
    </MouseAnimationContext.Provider>
  );
}

export function useMouseAnimation(): MouseAnimationContextType {
  const context = useContext(MouseAnimationContext);
  if (!context) {
    throw new Error(
      'useMouseAnimation must be used within a MouseAnimationProvider'
    );
  }
  return context;
}
