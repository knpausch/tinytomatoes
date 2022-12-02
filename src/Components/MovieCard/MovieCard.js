import React from "react";
import './MovieCard.css';

const MovieCard = ({image}) => {
  return (
    <div>
      <img className='poster' src={image} />
    </div>
  )
}

export default MovieCard