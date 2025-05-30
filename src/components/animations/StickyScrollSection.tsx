
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StickyScrollSectionProps {
  items: {
    title: string;
    description: string;
    image: string;
    content?: React.ReactNode;
  }[];
  className?: string;
}

export const StickyScrollSection: React.FC<StickyScrollSectionProps> = ({
  items,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      const windowHeight = window.innerHeight;

      // Check if container is in viewport
      if (containerBottom > 0 && containerTop < windowHeight) {
        // Calculate how much of the container has been scrolled through
        const containerHeight = containerRect.height;
        const scrollableHeight = containerHeight - windowHeight;
        
        if (scrollableHeight > 0) {
          // Calculate scroll progress (0 to 1)
          const scrolled = Math.max(0, -containerTop);
          const progress = Math.min(scrolled / scrollableHeight, 1);
          
          // Map progress to item index
          const newIndex = Math.floor(progress * items.length);
          const clampedIndex = Math.min(Math.max(newIndex, 0), items.length - 1);
          
          if (clampedIndex !== activeIndex) {
            setActiveIndex(clampedIndex);
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [items.length, activeIndex]);

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      style={{ height: `${items.length * 100}vh` }}
    >
      {/* Progress indicator */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-3">
          {items.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-12 rounded-full transition-all duration-500 ease-out",
                activeIndex === index 
                  ? "bg-blue-600 shadow-lg shadow-blue-600/30" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      </div>

      {/* Sticky content container */}
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 relative z-20 bg-white">
          <div className="max-w-2xl w-full relative">
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-out',
                  activeIndex === index
                    ? 'opacity-100 translate-y-0 scale-100 blur-0'
                    : index < activeIndex
                    ? 'opacity-0 -translate-y-12 scale-95 blur-sm'
                    : 'opacity-0 translate-y-12 scale-95 blur-sm'
                )}
                style={{
                  transitionDelay: activeIndex === index ? '100ms' : '0ms'
                }}
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 text-black leading-tight">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 md:mb-10">
                  {item.description}
                </p>
                {item.content && (
                  <div 
                    className={cn(
                      "transition-all duration-700 ease-out",
                      activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ 
                      transitionDelay: activeIndex === index ? '400ms' : '0ms'
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                'absolute inset-0 transition-all duration-1000 ease-out',
                activeIndex === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
