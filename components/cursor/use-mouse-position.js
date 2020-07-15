import { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ xPos: e.clientX, yPos: e.clientY });

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return position;
};
