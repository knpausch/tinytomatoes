import React from 'react'
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Movies = ({ loading, movies, seeMovieDetails}) => {
  const createDisplay = (moviesList) => {
    if(moviesList.length>0) {
      const displayMovies = moviesList.map(movie => {
        return (
          <NavLink key={movie.id} to={`/movie/${movie.id}`}>
          <MovieCard
            image={movie.poster_path}
            id={movie.id}
            seeMovieDetails={seeMovieDetails}
            name={movie.title}
          />
          </NavLink>
        )
      })
      return displayMovies
    } else if (moviesList.length === 0 && !loading) {
      return <h2 className="empty-error">There are currently no movies available for this rating. Reset or select another rating.</h2>
    }  
  }
  const userDisplay = createDisplay(movies)
  
  return (
    <div className='movie-container'>
      {userDisplay}
    </div>
  )
}

export default Movies

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  seeMovieDetails: PropTypes.func.isRequired
}