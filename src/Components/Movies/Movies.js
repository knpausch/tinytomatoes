import React from 'react'
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Movies = ({ movies, seeMovieDetails}) => {
  const singleMovie = movies.map(movie => {
    return (
      <NavLink to={`/${movie.id}`}>
      <MovieCard
        image={movie.poster_path}
        id={movie.id}
        seeMovieDetails={seeMovieDetails}
        name={movie.title}
      />
      </NavLink>
    )
  })

  return (
    <div className='movie-container'>
      {singleMovie}
    </div>
  )
}

export default Movies

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  seeMovieDetails: PropTypes.func.isRequired
}