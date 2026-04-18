import { useEffect, useRef, useState } from 'react';

export default function SearchBar({ query, handleQueryChange }) {
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth < 425);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const searchRef = useRef();

  useEffect(() => {
    function handleResize() {
      setIsSmallMobile(window.innerWidth < 425);
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleSearchKeyDown(e) {
      if (e.key === '/') {
        e.preventDefault();

        if (searchRef.current) {
          searchRef.current.focus();
        }
      }

      if (e.key === 'Escape') {
        if (searchRef.current) {
          searchRef.current.blur();
        }
      }
    }

    window.addEventListener('keydown', handleSearchKeyDown);
    return () => window.removeEventListener('keydown', handleSearchKeyDown);
  }, []);

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
          placeholder={
            isSmallMobile
              ? 'Search...'
              : isMobile
                ? 'Search movies and TV shows'
                : 'Press / to jump to search box'
          }
          value={query}
          onChange={handleQueryChange}
          autoFocus
        />
      </fieldset>
    </form>
  );
}
