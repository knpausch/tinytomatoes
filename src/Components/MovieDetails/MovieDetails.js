import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ singleMovie, displayHome }) => {
    return (
        <div className='movieDetailContainer'>
            <button onClick={() => displayHome()} className ='homeButton'>Home</button>
            <div className='movieDetails'>
                <img className='poster-mini' src={singleMovie.poster_path} />
                <div className='movieInfo'>
                    <h2>{singleMovie.title}</h2>
                    {singleMovie.tagline.length>0 && <p>"{singleMovie.tagline}"</p>}
                    <p>Genre: {singleMovie.genres.join(", ")}</p>
                    <p>Rating: {singleMovie.average_rating.toFixed(2)}/10</p>
                    <br></br>
                    <h3>Overview:</h3>
                    <p>{singleMovie.overview}</p>
                    <br></br>
                    <p>Release Date: {formatDate(singleMovie.release_date)}</p>
                    <p>Runtime: {singleMovie.runtime} min</p>
                    {singleMovie.budget>0 && <p>Budget: ${formatCurrency(singleMovie.budget)}</p>}
                    {singleMovie.revenue>0 && <p>Revenue: ${formatCurrency(singleMovie.revenue)}</p>}
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