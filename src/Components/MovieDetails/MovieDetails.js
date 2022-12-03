import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ singleMovie }) => {
    return (
        <div>
            <div>
                <img className='poster-mini' src={singleMovie.movie.poster_path}/>
            </div>
            <div>
                <h1>{singleMovie.movie.title}</h1>
                <h3>{singleMovie.movie.tagline}</h3>
                <h3>Genre: {singleMovie.movie.genres}</h3>
                <h3>Rating: {singleMovie.movie.average_rating}/10</h3>
                <p>{singleMovie.movie.overview}</p>
                <h4>{singleMovie.movie.release_date}</h4>
                <h4>Runtime: {singleMovie.movie.runtime} min</h4>
                <h4>Budget: ${singleMovie.movie.budget}</h4>
                <h4>Revenue: ${singleMovie.movie.revenue}</h4>
            </div>
            <button>Home</button>
        </div>
    )
}

export default MovieDetails