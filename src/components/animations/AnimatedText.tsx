
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-fade' | 'slide-up' | 'text-reveal';
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  triggerOnce = true,
  threshold = 0.1,
}) => {
  const { elementRef, isInView } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
  });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'animate-fade-in-up';
      case 'fade-down':
        return 'animate-fade-in-down';
      case 'fade-left':
        return 'animate-fade-in-left';
      case 'fade-right':
        return 'animate-fade-in-right';
      case 'scale-fade':
        return 'animate-scale-fade-in';
      case 'slide-up':
        return 'animate-slide-up-reveal';
      case 'text-reveal':
        return 'animate-text-reveal';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'animate-on-scroll',
        isInView && 'in-view',
        isInView && getAnimationClass(),
        className
      )}
    >
      {children}
    </div>
  );
};
