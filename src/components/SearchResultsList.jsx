import SearchResultsItem from './SearchResultsItem';

export default function SearchResultsList({ movies, handleMovieSelection }) {
  return (
    <ul className='list search-results-list'>
      {movies?.map((movie, i) => (
        <SearchResultsItem
          key={`${movie.imdbID}-${i}`}
          movie={movie}
          handleMovieSelection={handleMovieSelection}
        />
      ))}
    </ul>
  );
}
