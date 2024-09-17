import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=1d3f9fd0`);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <img className="movie-poster" src={movieDetails.Poster} alt={movieDetails.Title} />
      <div className="movie-info">
        <h1 className="movie-title">{movieDetails.Title}</h1>
        <p className="movie-details"><strong>Director:</strong> {movieDetails.Director}</p>
        <p className="movie-details"><strong>Cast:</strong> {movieDetails.Actors}</p>
        <p className="movie-details"><strong>Rating:</strong> <span className="movie-rating">{movieDetails.imdbRating}</span></p>
        <p className="movie-details"><strong>Description:</strong> {movieDetails.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
