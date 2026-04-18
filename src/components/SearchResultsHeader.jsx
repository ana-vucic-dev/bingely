export default function SearchResultsHeader({ movies }) {
  return (
    <>
      <h2 id='search-results-heading'>Movies & TV Shows</h2>

      {movies.length ? (
        <p className='num-of-matches'>
          Found <strong>{movies.length}</strong> matches
        </p>
      ) : null}
    </>
  );
}
