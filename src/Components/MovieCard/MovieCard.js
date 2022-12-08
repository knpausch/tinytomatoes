import React from "react"
import './MovieCard.css'
import PropTypes from 'prop-types'

const MovieCard = ({image, id, seeMovieDetails, name}) => {
  return (
    <div>
      <img onClick={() => seeMovieDetails(id)} className='poster' src={image} id={id} alt={`movie poster of ${name}`}/>
    </div>
  )
}

export default MovieCard

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  seeMovieDetails: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}