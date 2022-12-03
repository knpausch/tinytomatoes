import React from "react";
import './MovieCard.css';

const MovieCard = ({image, id, seeMovieDetails}) => {
  return (
    <div>
      <img onClick={() => seeMovieDetails()} className='poster' src={image} id={id}/>
    </div>
  )
}

export default MovieCard