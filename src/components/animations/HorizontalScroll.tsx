
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface HorizontalScrollProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  spacing?: string;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = '',
  itemClassName = '',
  spacing = 'gap-8',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const element = scrollRef.current;
      const scrollLeft = element.scrollLeft;
      const maxScroll = element.scrollWidth - element.clientWidth;
      const progress = scrollLeft / maxScroll;
      
      setScrollProgress(progress);
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={cn('relative w-full', className)}>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className={cn('flex', spacing)}>
          {children.map((child, index) => (
            <div
              key={index}
              className={cn('flex-shrink-0', itemClassName)}
              style={{
                transform: `translateX(${scrollProgress * 20}px)`,
                opacity: 1 - scrollProgress * 0.3,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-transform duration-300"
            style={{ transform: `translateX(-${(1 - scrollProgress) * 100}%)` }}
          />
        </div>
      </div>
    </div>
  );
};
