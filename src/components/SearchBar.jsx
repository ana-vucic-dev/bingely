import { useRef } from 'react';
import useKey from '../hooks/useKey.js';
import useWindowWidth from '../hooks/useWindowWidth.js';

export default function SearchBar({ query, handleQueryChange }) {
  const width = useWindowWidth();
  const searchRef = useRef();

  const device = width < 425 ? 'mobile' : width < 768 ? 'tablet' : 'desktop';

  const placeholders = {
    mobile: 'Search...',
    tablet: 'Search movies and TV shows',
    desktop: 'Press / to jump to search box'
  };

  function focusSearch(e) {
    e.preventDefault();
    searchRef.current?.focus();
  }

  function blurSearch() {
    searchRef.current?.blur();
  }

  useKey('/', focusSearch);
  useKey('Escape', blurSearch);

  return (
    <form className='search-form'>
      <fieldset>
        <legend className='visually-hidden'>Search movies and TV shows</legend>

        <label
          htmlFor='search'
          className='visually-hidden'>
          Enter a title
        </label>

        <input
          type='search'
          ref={searchRef}
          id='search'
          className='search-input'
          placeholder={placeholders[device]}
          value={query}
          onChange={handleQueryChange}
          autoFocus
        />
      </fieldset>
    </form>
  );
}
