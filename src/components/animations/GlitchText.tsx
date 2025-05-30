
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  glitchIntensity?: 'low' | 'medium' | 'high';
  triggerOnHover?: boolean;
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  className = '',
  glitchIntensity = 'medium',
  triggerOnHover = false,
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!triggerOnHover) {
      const interval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [triggerOnHover]);

  const getGlitchClass = () => {
    switch (glitchIntensity) {
      case 'low': return 'animate-glitch-low';
      case 'medium': return 'animate-glitch-medium';
      case 'high': return 'animate-glitch-high';
      default: return 'animate-glitch-medium';
    }
  };

  return (
    <div
      className={cn(
        'relative inline-block',
        className
      )}
      onMouseEnter={() => triggerOnHover && setIsGlitching(true)}
      onMouseLeave={() => triggerOnHover && setIsGlitching(false)}
    >
      <span className="relative z-10">{children}</span>
      {isGlitching && (
        <>
          <span
            className={cn(
              'absolute top-0 left-0 text-red-500 opacity-80 mix-blend-multiply',
              getGlitchClass()
            )}
            style={{ transform: 'translate(-2px, -1px)' }}
          >
            {children}
          </span>
          <span
            className={cn(
              'absolute top-0 left-0 text-cyan-500 opacity-80 mix-blend-multiply',
              getGlitchClass()
            )}
            style={{ transform: 'translate(2px, 1px)' }}
          >
            {children}
          </span>
        </>
      )}
    </div>
  );
};
