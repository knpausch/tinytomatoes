import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ singleMovie }) => {
    // console.log("SINGLE MOVIE:", singleMovie.movie.overview)
    return (
        <h1>{singleMovie.movie.overview}</h1>
    )
}

export default MovieDetails