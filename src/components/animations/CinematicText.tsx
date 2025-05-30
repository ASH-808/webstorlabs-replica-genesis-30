
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface CinematicTextProps {
  children: React.ReactNode;
  variant?: 'reveal' | 'split' | 'fade-up' | 'scale-in' | 'typewriter' | 'reveal-up';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  delay?: number;
  className?: string;
  splitWords?: boolean;
}

export const CinematicText: React.FC<CinematicTextProps> = ({
  children,
  variant = 'reveal',
  size = 'md',
  delay = 0,
  className = '',
  splitWords = false,
}) => {
  const { elementRef, isInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
    delay,
  });

  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'text-2xl md:text-3xl';
      case 'md': return 'text-3xl md:text-4xl lg:text-5xl';
      case 'lg': return 'text-4xl md:text-5xl lg:text-6xl';
      case 'xl': return 'text-5xl md:text-6xl lg:text-7xl';
      case 'hero': return 'text-6xl md:text-8xl lg:text-9xl';
      default: return 'text-3xl md:text-4xl lg:text-5xl';
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'reveal':
        return 'overflow-hidden relative';
      case 'split':
        return 'overflow-hidden';
      case 'fade-up':
        return 'transform transition-all duration-1000';
      case 'scale-in':
        return 'transform transition-all duration-1000';
      case 'typewriter':
        return 'overflow-hidden border-r-2 border-black';
      case 'reveal-up':
        return 'transform transition-all duration-1000';
      default:
        return '';
    }
  };

  const renderContent = () => {
    if (splitWords && typeof children === 'string') {
      return children.split(' ').map((word, index) => (
        <span
          key={index}
          className={cn(
            'inline-block mr-2 opacity-0',
            isInView && 'animate-fade-in-up opacity-100'
          )}
          style={{ animationDelay: isInView ? `${index * 100}ms` : '0ms' }}
        >
          {word}
        </span>
      ));
    }
    return children;
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'font-black leading-none',
        getSizeClass(),
        getVariantClass(),
        variant === 'fade-up' && !isInView && 'opacity-0 translate-y-8',
        variant === 'fade-up' && isInView && 'opacity-100 translate-y-0',
        variant === 'scale-in' && !isInView && 'opacity-0 scale-95',
        variant === 'scale-in' && isInView && 'opacity-100 scale-100',
        variant === 'reveal-up' && !isInView && 'opacity-0 translate-y-16',
        variant === 'reveal-up' && isInView && 'opacity-100 translate-y-0 animate-reveal-up',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {renderContent()}
    </div>
  );
};
