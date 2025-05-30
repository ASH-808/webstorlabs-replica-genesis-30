
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
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which item should be active based on scroll position
      const scrollProgress = (scrollY - containerTop + windowHeight / 2) / containerHeight;
      const newActiveIndex = Math.min(
        Math.max(0, Math.floor(scrollProgress * items.length)),
        items.length - 1
      );

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex">
        {/* Text Content */}
        <div className="w-1/2 flex items-center justify-center p-12">
          <div className="max-w-lg">
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={cn(
                  'absolute inset-0 flex flex-col justify-center transition-all duration-1000',
                  activeIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                )}
              >
                <h3 className="text-4xl md:text-5xl font-black mb-6 text-black">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {item.description}
                </p>
                {item.content}
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="w-1/2 relative overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                'absolute inset-0 transition-all duration-1000',
                activeIndex === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
