import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './MovieList.css';

function MovieList({ searchQuery, setSearchQuery }) {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=1d3f9fd0`);
setMovies(response.data.Search || []);
  };

  return (
    <div className="movie-list">
      <form onSubmit={handleSearch} className="search-bar">
        <input 
          type="text" 
          placeholder="Search for a movie or web series..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <div className="movie-item">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
