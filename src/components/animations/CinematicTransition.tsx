
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface CinematicTransitionProps {
  children: React.ReactNode;
  transitionType?: 'fade-black' | 'slide-reveal' | 'spotlight' | 'curtain';
  duration?: number;
  className?: string;
}

export const CinematicTransition: React.FC<CinematicTransitionProps> = ({
  children,
  transitionType = 'fade-black',
  duration = 1000,
  className = '',
}) => {
  const { elementRef, isInView } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const getTransitionClass = () => {
    switch (transitionType) {
      case 'fade-black':
        return isInView ? 'animate-fade-from-black' : 'opacity-0';
      case 'slide-reveal':
        return isInView ? 'animate-slide-reveal' : 'translate-y-full';
      case 'spotlight':
        return isInView ? 'animate-spotlight-reveal' : 'opacity-0';
      case 'curtain':
        return isInView ? 'animate-curtain-reveal' : 'scale-0';
      default:
        return isInView ? 'animate-fade-from-black' : 'opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-1000 ease-out',
        getTransitionClass(),
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};
