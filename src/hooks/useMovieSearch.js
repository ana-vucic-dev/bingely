import { useState, useEffect } from 'react';
import { baseUrl, API_KEY } from '../config/omdbApi.js';

export default function useMovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(
          `${baseUrl}?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error('Something went wrong while fetching movies');
        }

        const data = await response.json();

        if (data.Response === 'False') {
          throw new Error('No matches');
        }

        setMovies(data.Search);
        setError('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.log(error.message);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (!query.length) {
      setMovies([]);
      setError('');
      return;
    }

    fetchMovies();

    return () => controller.abort();
  }, [query]);

  return {
    query,
    movies,
    isLoading,
    error,
    handleQueryChange
  };
}
