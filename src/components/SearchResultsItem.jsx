import Button from './Button';

export default function SearchResultsItem({ movie, handleMovieSelection }) {
  const { imdbID, Title: title, Year: year, Poster: poster } = movie;

  return (
    <li onClick={() => handleMovieSelection(imdbID)}>
      <Button
        type='button'
        className='movie-list-btn'>
        <img
          src={poster}
          alt=''
          loading='lazy'
        />

        <strong className='movie-title'>{title}</strong>

        <span className='release-year'>
          <span className='visually-hidden'>Release year</span>
          <span>{year}</span>
        </span>
      </Button>
    </li>
  );
}
