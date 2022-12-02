import React from "react";
import './MovieCard.css';

const MovieCard = ({title}) => {
 
  return (
    <div className='movie-card'>
      <h3>Movie</h3>
      <h3>{title}</h3>
    </div>
  )
}

export default MovieCard