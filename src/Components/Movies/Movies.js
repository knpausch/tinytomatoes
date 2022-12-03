import React from 'react';
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard';

const Movies = ({ movies, seeMovieDetails}) => {
  const singleMovie = movies.map(movie => {
    return (
      <MovieCard
        image={movie['poster_path']}
        key={movie['id']}
        id={movie['id']}
        seeMovieDetails={seeMovieDetails}
      />
    )
  })

  return (
    <div className='movie-container'>
      {singleMovie}
    </div>
  )
}

export default Movies