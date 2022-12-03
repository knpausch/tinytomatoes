import React from "react";
import './MovieCard.css';

const MovieCard = ({image, key, id}) => {
  console.log(key)
  return (
    <div>
      <img className='poster' src={image} id={id}/>
    </div>
  )
}

export default MovieCard