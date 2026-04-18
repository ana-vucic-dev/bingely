import { useEffect } from 'react';

export default function useKey(key, callback) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key.toLowerCase() === key.toLowerCase()) {
        callback(e);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
}
