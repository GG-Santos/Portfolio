import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Magnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    let boundingRect = element.getBoundingClientRect();

    const handleResize = () => {
      boundingRect = element.getBoundingClientRect();
    };

    const handleMouseMove = (e) => {
      const mousePosX = e.clientX - boundingRect.left;
      const mousePosY = e.clientY - boundingRect.top;

      gsap.to(element, {
        x: (mousePosX - boundingRect.width / 2) * 0.4,
        y: (mousePosY - boundingRect.height / 2) * 0.4,
        duration: 0.8,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1,0.3)',
      });
    };

    window.addEventListener('resize', handleResize);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};
