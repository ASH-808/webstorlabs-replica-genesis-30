
import { useState, useEffect } from 'react';
import { useMousePosition } from './useMousePosition';

interface ParallaxOptions {
  sensitivity?: number;
  maxOffset?: number;
  easing?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { sensitivity = 0.05, maxOffset = 20, easing = 0.1 } = options;
  const mousePosition = useMousePosition();
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    
    const updateTransform = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const targetX = Math.max(-maxOffset, Math.min(maxOffset, (mousePosition.x - centerX) * sensitivity));
      const targetY = Math.max(-maxOffset, Math.min(maxOffset, (mousePosition.y - centerY) * sensitivity));
      
      setTransform(prev => ({
        x: prev.x + (targetX - prev.x) * easing,
        y: prev.y + (targetY - prev.y) * easing
      }));
      
      animationId = requestAnimationFrame(updateTransform);
    };

    animationId = requestAnimationFrame(updateTransform);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mousePosition, sensitivity, maxOffset, easing]);

  return {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    x: transform.x,
    y: transform.y
  };
};
