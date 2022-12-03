import React from 'react';
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard';

const Movies = ({ movies }) => {
  const singleMovie = movies.movies.map(movie => {
    return (
      <MovieCard
        image={movie['poster_path']}
        key={movie['id']}
        id={movie['id']}
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