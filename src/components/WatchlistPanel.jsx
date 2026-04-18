import { useState } from 'react';
import Button from './Button';
import WatchlistList from './WatchlistList';

export default function WatchlistPanel({ watched, children }) {
  const [isOpen2, setIsOpen2] = useState(true);

  function toggleWatchlist() {
    setIsOpen2(isOpen => !isOpen);
  }

  return (
    <section
      className='panel'
      aria-label='Watchlist'>
      {children}

      <Button
        className='btn-toggle'
        onClick={toggleWatchlist}>
        {isOpen2 ? '–' : '+'}
      </Button>

      {isOpen2 && <WatchlistList watched={watched} />}
    </section>
  );
}
