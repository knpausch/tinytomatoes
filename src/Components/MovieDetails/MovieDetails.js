import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ singleMovie, displayHome }) => {
    return (
        <div className='movieDetailContainer'>
            <button onClick={() => displayHome()} className ='homeButton'>Home</button>
            <div className='movieDetails'>
                <img className='poster-mini' src={singleMovie.movie.poster_path} />
                <div className='movieInfo'>
                    <h2>{singleMovie.movie.title}</h2>
                    <p>{singleMovie.movie.tagline}</p>
                    <p>Genre: {singleMovie.movie.genres}</p>
                    <p>Rating: {singleMovie.movie.average_rating.toFixed(2)}/10</p>
                    <br></br>
                    <h3>Overview:</h3>
                    <p>{singleMovie.movie.overview}</p>
                    <br></br>
                    <p>Release Date: {formatDate(singleMovie.movie.release_date)}</p>
                    <p>Runtime: {singleMovie.movie.runtime} min</p>
                    <p>Budget: ${formatCurrency(singleMovie.movie.budget)}</p>
                    <p>Revenue: ${formatCurrency(singleMovie.movie.revenue)}</p>
                </div>
            </div>
        </div>
    )
}

const formatDate = (date) => {
    date = date.split('-')
    let year = date.splice(0,1)
    date.push(year[0])
    date = date.join('/')
    return date
}

const formatCurrency = (amount) => {
    amount = amount.toLocaleString()
    return amount
}

export default MovieDetails