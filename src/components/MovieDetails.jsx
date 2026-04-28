import { useEffect } from 'react';
import useMovieDetails from '../hooks/useMovieDetails.js';
import useKey from '../hooks/useKey.js';

import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import MovieDetailsHeader from './MovieDetailsHeader';
import MovieRating from './MovieRating';
import MoviePlot from './MoviePlot';

export default function MovieDetails({
  watched,
  selectedId,
  addToWatchlist,
  removeFromWatchlist,
  updateLiveRegion,
  goBack
}) {
  const { isLoading, error, movie } = useMovieDetails(selectedId);
  const watchedMovie = watched.find(movie => movie.imdbID === selectedId);

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

  return (
    <section
      className='details'
      aria-labelledby='details-title'>
      <MovieDetailsHeader
        movie={movie}
        watchedMovie={watchedMovie}
        selectedId={selectedId}
        removeFromWatchlist={removeFromWatchlist}
        updateLiveRegion={updateLiveRegion}
        goBack={goBack}
      />

      <div className='rating-and-plot'>
        <MovieRating
          movie={movie}
          watchedMovie={watchedMovie}
          selectedId={selectedId}
          addToWatchlist={addToWatchlist}
          updateLiveRegion={updateLiveRegion}
          goBack={goBack}
        />

        <MoviePlot movie={movie} />
      </div>
    </section>
  );
}
