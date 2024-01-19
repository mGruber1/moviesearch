import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from './components/MovieListHeading';
import MovieSearch from './components/MovieSearch';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("star");
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const getMovies = async () => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  }

  const addFavouriteMovie = (movie) => {
    setFavouriteMovies(() => [...favouriteMovies, movie]);
  };

  useEffect(() => {
    getMovies();
  }, [searchValue])

  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center my-4">
        <MovieListHeading heading="Movies" />
        <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue}></MovieSearch>
      </div>
      <div className='row'>
        <MovieList movies={movies} addFavouriteMovie={addFavouriteMovie}></MovieList>
      </div>
      <div className="row d-flex align-items-center my-4">
        <MovieListHeading heading="My Favourites" />
      </div>
      <div className='row'>
        <MovieList movies={favouriteMovies}></MovieList>
      </div>
    </div>
  )
}

export default App;
