import formatTime from '../utils/formatTime.js';
import formatVotes from '../utils/formatVotes.js';
import Button from './Button';

export default function MovieDetailsHeader({
  movie,
  watchedMovie,
  selectedId,
  removeFromWatchlist,
  updateLiveRegion,
  goBack
}) {
  const isWatched = Boolean(watchedMovie);

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    imdbVotes,
    Released: released,
    Type: type,
    totalSeasons,
    Genre: genre,
    Language: language,
    Country: country
  } = movie;

  const formattedRuntime = formatTime(runtime);
  const votes = formatVotes(imdbVotes);

  function removeMovie(id) {
    removeFromWatchlist(id);
    updateLiveRegion(`${title} removed from watchlist`);
    goBack();
  }

  return (
    <header
      className='details-header'
      aria-label='Overview'>
      <Button
        type='button'
        className='back-btn'
        aria-label='Back to watchlist'
        onClick={goBack}>
        <i
          className='bi bi-arrow-left back-btn-icon'
          aria-hidden='true'></i>
      </Button>

      {isWatched && (
        <Button
          type='button'
          className='delete-btn'
          aria-label='Remove from watchlist'
          onClick={() => removeMovie(selectedId)}>
          <span aria-hidden='true'>X</span>
        </Button>
      )}

      <img
        src={poster}
        alt={`${title} poster`}
      />

      <div className='details-overview'>
        <h2 id='details-title'>{title}</h2>

        <p>
          <span className='visually-hidden'>Released</span>
          {released}

          <span aria-hidden='true'> &bull; </span>

          {type === 'series' && (
            <>
              <span>{totalSeasons} seasons</span>
              <span aria-hidden='true'> &bull; </span>
            </>
          )}

          <span className='visually-hidden'>Runtime</span>
          {formattedRuntime}
        </p>

        <p>
          <span className='visually-hidden'>Genre</span> {genre}
        </p>

        <p>Language: {language}</p>
        <p>Country: {country}</p>

        <p className='imdb-rating'>
          IMDb rating:
          <span className='stars-and-votes'>
            <span aria-hidden='true'>⭐️</span>
            {imdbRating}/10 <span className='votes'>{votes} votes</span>
          </span>
        </p>
      </div>
    </header>
  );
}
