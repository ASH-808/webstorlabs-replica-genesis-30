
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface StaggeredTextProps {
  children: React.ReactNode[];
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-fade';
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

export const StaggeredText: React.FC<StaggeredTextProps> = ({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  className = '',
  itemClassName = '',
}) => {
  const { elementRef, isInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
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
      default:
        return 'animate-fade-in-up';
    }
  };

  const getDelayClass = (index: number) => {
    const delay = index * staggerDelay;
    if (delay <= 100) return 'animate-delay-100';
    if (delay <= 200) return 'animate-delay-200';
    if (delay <= 300) return 'animate-delay-300';
    if (delay <= 400) return 'animate-delay-400';
    if (delay <= 500) return 'animate-delay-500';
    if (delay <= 600) return 'animate-delay-600';
    if (delay <= 700) return 'animate-delay-700';
    if (delay <= 800) return 'animate-delay-800';
    return '';
  };

  return (
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            'animate-on-scroll',
            isInView && 'in-view',
            isInView && getAnimationClass(),
            isInView && getDelayClass(index),
            itemClassName
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
