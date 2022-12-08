import React from "react";
import './MovieCard.css';

const MovieCard = ({image, id, seeMovieDetails, name}) => {
  return (
    <div>
      <img onClick={() => seeMovieDetails(id)} className='poster' src={image} id={id} alt={`movie poster of ${name}`}/>
    </div>
  )
}

export default MovieCard