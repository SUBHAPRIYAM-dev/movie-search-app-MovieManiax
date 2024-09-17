import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ poster, name, releaseDate, rating }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${name}`);
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating ; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="movie-card"onClick={handleCardClick}>
      <img src={poster} alt={name} className="movie-poster" />
      <h5 className="movie-name">Name:{name}</h5>
      <p className="movie-date">Release Date: {releaseDate}</p>
      <div className="movie-rating">{renderStars(rating)}</div>
    </div>
  );
};

export default MovieCard; 
