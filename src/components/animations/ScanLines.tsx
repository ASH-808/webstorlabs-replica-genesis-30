
import React from 'react';
import { cn } from '@/lib/utils';

interface ScanLinesProps {
  className?: string;
  opacity?: number;
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'horizontal' | 'vertical';
}

export const ScanLines: React.FC<ScanLinesProps> = ({
  className = '',
  opacity = 0.1,
  speed = 'medium',
  direction = 'horizontal',
}) => {
  const getAnimationClass = () => {
    const speedClass = speed === 'slow' ? 'animate-scan-slow' : speed === 'fast' ? 'animate-scan-fast' : 'animate-scan-medium';
    return direction === 'vertical' ? `${speedClass} rotate-90` : speedClass;
  };

  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}>
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-8 w-full',
          getAnimationClass()
        )}
        style={{ opacity }}
      />
    </div>
  );
};
