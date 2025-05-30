
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface StaggeredTextProps {
  children: React.ReactNode[];
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-fade' | 'reveal-up';
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
      case 'reveal-up':
        return 'animate-reveal-up';
      default:
        return 'animate-fade-in-up';
    }
  };

  const getDelayStyle = (index: number) => {
    const delay = index * staggerDelay;
    return {
      animationDelay: isInView ? `${delay}ms` : '0ms'
    };
  };

  return (
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            'animate-on-scroll opacity-0',
            isInView && 'opacity-100',
            isInView && getAnimationClass(),
            itemClassName
          )}
          style={getDelayStyle(index)}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
