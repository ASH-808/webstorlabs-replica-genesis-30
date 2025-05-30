
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
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          if (!isNaN(index)) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
    >
      {/* Fixed content container */}
      <div className="fixed top-0 left-0 w-full h-screen flex z-10 pointer-events-none">
        {/* Text Content - Fixed on left */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white">
          <div className="max-w-2xl w-full relative">
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out',
                  activeIndex === index
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                )}
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
                      "transition-all duration-500 ease-out pointer-events-auto",
                      activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ 
                      transitionDelay: activeIndex === index ? '200ms' : '0ms'
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Content - Fixed on right */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
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

        {/* Progress indicator - Fixed on right */}
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-20 hidden md:block pointer-events-auto">
          <div className="flex flex-col space-y-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const section = sectionsRef.current[index];
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className={cn(
                  "w-2 h-12 rounded-full transition-all duration-300 ease-out cursor-pointer",
                  activeIndex === index 
                    ? "bg-blue-600 shadow-lg shadow-blue-600/30" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll sections - These trigger the content changes */}
      <div className="relative z-0">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => sectionsRef.current[index] = el}
            data-index={index}
            className="h-screen flex items-center justify-center snap-start"
          >
            {/* Mobile content - only visible on mobile */}
            <div className="block md:hidden w-full p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black mb-4 text-black">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                {item.content && (
                  <div className="mb-6">
                    {item.content}
                  </div>
                )}
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
