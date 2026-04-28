import { useState } from 'react';
import Button from './Button';
import StarRating from './StarRating';

export default function MovieRating({
  movie,
  watchedMovie,
  selectedId,
  addToWatchlist,
  updateLiveRegion,
  goBack
}) {
  const [userRating, setUserRating] = useState('');

  const isWatched = Boolean(watchedMovie);
  const watchedUserRating = watchedMovie?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    imdbRating,
    Runtime: runtime,
    Type: type
  } = movie;

  function addMovie() {
    const newMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      userRating,
      runtime: runtime === 'N/A' ? 'N/A' : Number(runtime.split(' ').at(0))
    };

    addToWatchlist(newMovie);
    updateLiveRegion(`${title} added to watchlist`);
    goBack();
  }

  return (
    <div className='rating-wrapper'>
      <section
        className='rating'
        aria-label='Rating section'>
        {!isWatched ? (
          <>
            <span className='visually-hidden'>
              Rate this {type === 'movie' ? 'movie' : 'series'} (maximum 10
              stars)
            </span>

            <StarRating
              maxRating={10}
              size={16}
              onSetRating={setUserRating}
            />

            {userRating > 0 && (
              <Button
                type='button'
                className='add-btn'
                onClick={addMovie}>
                <span aria-hidden='true'>+ </span>Add to watchlist
              </Button>
            )}
          </>
        ) : (
          <p>
            You rated this
            <span> {type === 'movie' ? 'movie' : 'series'} </span>
            <span>{watchedUserRating} </span>
            <span>{watchedUserRating === 1 ? 'star' : 'stars'}</span>
          </p>
        )}
      </section>
    </div>
  );
}
