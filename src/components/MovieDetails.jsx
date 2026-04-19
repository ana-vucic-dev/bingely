import { useEffect, useState } from 'react';
import useMovieDetails from '../hooks/useMovieDetails.js';
import useKey from '../hooks/useKey.js';
import formatTime from '../utils/formatTime.js';
import formatVotes from '../utils/formatVotes.js';

import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import Button from './Button';
import StarRating from './StarRating';

export default function MovieDetails({
  watched,
  selectedId,
  addToWatchlist,
  removeFromWatchlist,
  updateLiveRegion,
  goBack
}) {
  const { isLoading, error, movie } = useMovieDetails(selectedId);
  const [userRating, setUserRating] = useState('');

  const watchedMovie = watched.find(movie => movie.imdbID === selectedId);

  const isWatched = Boolean(watchedMovie);
  const watchedUserRating = watchedMovie?.userRating;

  useKey('Backspace', goBack);

  useEffect(() => {
    if (!movie?.Title) return;

    document.title = `${movie.Title} | Bingely`;

    return () => (document.title = 'Bingely');
  }, [movie?.Title]);

  if (isLoading || !movie) return <Loader />;

  if (error) {
    return (
      <ErrorMessage
        message={error}
        updateLiveRegion={updateLiveRegion}
      />
    );
  }

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    imdbVotes,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Writer: writer,
    Type: type,
    totalSeasons,
    Genre: genre,
    Language: language,
    Country: country
  } = movie;

  const formattedRuntime = formatTime(runtime);
  const votes = formatVotes(imdbVotes);

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

  function removeMovie(id) {
    removeFromWatchlist(id);
    updateLiveRegion(`${title} removed from watchlist`);
    goBack();
  }

  return (
    <section
      className='details'
      aria-labelledby='details-title'>
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

      <div className='rating-and-plot'>
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

        <section
          className='plot'
          aria-label='Plot'>
          <p className='plot-summary'>{plot}</p>

          <p>
            <span className='actors'>Starring: </span>
            {actors}
          </p>

          <p>
            <span className='creators'>Created by: </span>
            {director !== 'N/A' ? director : writer}
          </p>
        </section>
      </div>
    </section>
  );
}
