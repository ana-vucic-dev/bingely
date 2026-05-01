import { useEffect } from 'react';

export default function ErrorMessage({ message, updateLiveRegion }) {
  useEffect(() => {
    if (message) {
      updateLiveRegion(message);
    }
  }, [message, updateLiveRegion]);

  return (
    <p className='error'>
      <span aria-hidden='true'>😕</span> {message}
    </p>
  );
}
