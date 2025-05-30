
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useMousePosition } from '@/hooks/useMousePosition';

interface InteractiveImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: React.ReactNode;
  hoverScale?: number;
  parallaxIntensity?: number;
}

export const InteractiveImage: React.FC<InteractiveImageProps> = ({
  src,
  alt,
  className = '',
  overlay,
  hoverScale = 1.1,
  parallaxIntensity = 0.02,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  const getParallaxTransform = () => {
    if (!imageRef.current || !isHovered) return 'translate3d(0, 0, 0)';

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (mousePosition.x - centerX) * parallaxIntensity;
    const deltaY = (mousePosition.y - centerY) * parallaxIntensity;

    return `translate3d(${deltaX}px, ${deltaY}px, 0)`;
  };

  return (
    <div
      ref={imageRef}
      className={cn(
        'group relative overflow-hidden cursor-pointer',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full h-full transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `${getParallaxTransform()} scale(${isHovered ? hoverScale : 1})`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      
      {overlay && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          {overlay}
        </div>
      )}
      
      <div
        className={cn(
          'absolute inset-0 bg-black transition-opacity duration-500',
          isHovered ? 'opacity-20' : 'opacity-0'
        )}
      />
    </div>
  );
};
