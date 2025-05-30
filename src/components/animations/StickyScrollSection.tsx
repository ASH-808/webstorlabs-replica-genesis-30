
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

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Only calculate when container is in viewport
      if (containerTop <= 0 && containerTop + containerHeight > windowHeight) {
        // Calculate how far we've scrolled through the container
        const scrolled = Math.abs(containerTop);
        const maxScroll = containerHeight - windowHeight;
        const scrollProgress = Math.min(scrolled / maxScroll, 1);
        
        // Calculate active index based on scroll progress
        const newActiveIndex = Math.min(
          Math.floor(scrollProgress * items.length),
          items.length - 1
        );

        setActiveIndex(newActiveIndex);
      }
    };

    const throttledScroll = (() => {
      let ticking = false;
      return () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    })();

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      style={{ height: `${items.length * 100}vh` }}
    >
      {/* Progress indicator */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-2">
          {items.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-8 rounded-full transition-all duration-300",
                activeIndex === index ? "bg-blue-600" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>

      {/* Sticky content container */}
      <div className="sticky top-0 h-screen flex">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-20 bg-white">
          <div className="max-w-lg w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out',
                  activeIndex === index
                    ? 'opacity-100 translate-y-0 scale-100'
                    : activeIndex > index 
                    ? 'opacity-0 -translate-y-8 scale-95'
                    : 'opacity-0 translate-y-8 scale-95'
                )}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-black leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8">
                  {item.description}
                </p>
                {item.content && (
                  <div 
                    className={cn(
                      "transition-all duration-500",
                      activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ 
                      transitionDelay: activeIndex === index ? '300ms' : '0ms'
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
        <div className="hidden md:block md:w-1/2 relative">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                'absolute inset-0 transition-all duration-700 ease-out',
                activeIndex === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
