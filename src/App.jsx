import { useState } from 'react';
import useMovieSearch from './hooks/useMovieSearch.js';
import useLocalStorageState from './hooks/useLocalStorageState.js';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Main from './components/Main';
import Panel from './components/Panel';
import PanelHeader from './components/PanelHeader';
import SearchResultsHeader from './components/SearchResultsHeader';
import SearchResultsList from './components/SearchResultsList';
import WatchlistHeader from './components/WatchlistHeader';
import WatchlistList from './components/WatchlistList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';

export default function App() {
  const { query, movies, isLoading, error, handleQueryChange } =
    useMovieSearch();

  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useLocalStorageState([], 'bingely');
  const [liveMessage, setLiveMessage] = useState('');

  function handleMovieSelection(id) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }

  function addToWatchlist(movie) {
    setWatched(watched => [...watched, movie]);
  }

  function removeFromWatchlist(id) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  }

  function updateLiveRegion(message) {
    setLiveMessage(message);
  }

  function goBack() {
    setSelectedId(null);
  }

  return (
    <div
      className='app'
      aria-labelledby='app-name'>
      <div
        aria-live='polite'
        aria-atomic='true'
        className='visually-hidden'>
        {liveMessage}
      </div>

      <NavBar>
        <SearchBar
          query={query}
          handleQueryChange={handleQueryChange}
        />
      </NavBar>

      <Main>
        <Panel
          aria-label='Search results'
          headerContent={
            <PanelHeader
              className='search-results-header'
              aria-labelledby='search-results-heading'>
              <SearchResultsHeader movies={movies} />
            </PanelHeader>
          }>
          {isLoading && <Loader />}

          {!isLoading && !error && (
            <SearchResultsList
              movies={movies}
              handleMovieSelection={handleMovieSelection}
            />
          )}

          {error && (
            <ErrorMessage
              message={error}
              updateLiveRegion={updateLiveRegion}
            />
          )}
        </Panel>

        <Panel
          aria-label='Watchlist'
          headerContent={
            <PanelHeader
              className='watchlist-header'
              aria-labelledby='watchlist-heading'>
              <WatchlistHeader watched={watched} />
            </PanelHeader>
          }>
          {selectedId ? (
            <MovieDetails
              key={selectedId}
              selectedId={selectedId}
              watched={watched}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
              updateLiveRegion={updateLiveRegion}
              goBack={goBack}
            />
          ) : (
            <WatchlistList
              watched={watched}
              handleMovieSelection={handleMovieSelection}
            />
          )}
        </Panel>
      </Main>

      <Footer />
    </div>
  );
}
