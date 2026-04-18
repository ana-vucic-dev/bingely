import formatTime from '../utils/formatTime.js';
import Button from './Button';

export default function WatchlistItem({ movie, handleMovieSelection }) {
  const { imdbID, title, poster, runtime, imdbRating, userRating } = movie;

  const formattedRuntime = formatTime(runtime);

  return (
    <li>
      <Button
        type='button'
        className='movie-list-btn'
        onClick={() => handleMovieSelection(imdbID)}>
        <img
          src={poster}
          alt=''
          loading='lazy'
        />

        <strong className='movie-title'>{title}</strong>

        <span className='watched-movie-info'>
          <span className='info'>
            <span aria-hidden='true'>⭐️</span>
            <span className='visually-hidden'>IMDb rating</span>
            <span>{imdbRating}</span>
          </span>

          <span className='info'>
            <span aria-hidden='true'>🌟</span>
            <span className='visually-hidden'>Your rating</span>
            <span>{userRating}</span>
          </span>

          <span className='info'>
            <span aria-hidden='true'>⏳</span>
            <span className='visually-hidden'>Runtime</span>
            <span>{formattedRuntime}</span>
          </span>
        </span>
      </Button>
    </li>
  );
}
