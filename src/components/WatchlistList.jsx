import WatchlistItem from './WatchlistItem';

export default function WatchlistList({ watched, handleMovieSelection }) {
  return (
    <ul className='list watchlist'>
      {watched
        ?.sort((a, b) => a.title.localeCompare(b.title))
        ?.map((movie, i) => (
          <WatchlistItem
            key={`${movie.imdbID}-${i}`}
            movie={movie}
            handleMovieSelection={handleMovieSelection}
          />
        ))}
    </ul>
  );
}
