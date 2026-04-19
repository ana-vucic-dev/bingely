import { useEffect, useState } from 'react';
import { baseUrl, API_KEY } from '../config/omdbApi';

export default function useMovieDetails(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setError('');
        setMovie(null);

        const response = await fetch(`${baseUrl}?apikey=${API_KEY}&i=${id}`, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error('Something went wrong while fetching details');
        }

        const data = await response.json();

        if (data.Response === 'False') {
          throw new Error(data.Error || 'Failed to fetch details');
        }

        setMovie(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();

    return () => controller.abort();
  }, [id]);

  return { isLoading, error, movie };
}
