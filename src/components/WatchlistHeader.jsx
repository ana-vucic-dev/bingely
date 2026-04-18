import getAverageRating from '../utils/getAverageRating.js';
import getTotalWatchTime from '../utils/getTotalWatchTime.js';
import formatTime from '../utils/formatTime.js';

export default function WatchlistHeader({ watched }) {
  const avgImdbRating = getAverageRating(watched.map(item => item.imdbRating));
  const avgUserRating = getAverageRating(watched.map(item => item.userRating));
  const totalWatchTime = getTotalWatchTime(
    watched.filter(item => item.runtime !== 'N/A').map(item => item.runtime)
  );
  const formattedWatchTime = formatTime(totalWatchTime);

  return (
    <>
      <h2 id='watchlist-heading'>Watchlist</h2>

      <section
        className='watchlist-stats'
        aria-label='Watchlist stats'>
        <p>
          <span aria-hidden='true'>#️⃣</span>
          <span className='visually-hidden'>Watchlist length</span>
          <span>{watched.length}</span>
        </p>

        <p>
          <span aria-hidden='true'>⭐️</span>
          <span className='visually-hidden'>Average IMDb rating</span>
          <span>{avgImdbRating ? avgImdbRating.toFixed(1) : 0}</span>
        </p>

        <p>
          <span aria-hidden='true'>🌟</span>
          <span className='visually-hidden'>Your average rating</span>
          <span>{avgUserRating ? avgUserRating.toFixed(1) : 0}</span>
        </p>

        <p>
          <span aria-hidden='true'>⌛</span>
          <span className='visually-hidden'>Total watch time</span>
          <span>{formattedWatchTime}</span>
        </p>
      </section>
    </>
  );
}
