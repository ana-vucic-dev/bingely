import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  function getWidth() {
    return typeof window !== 'undefined' ? window.innerWidth : 0;
  }

  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
