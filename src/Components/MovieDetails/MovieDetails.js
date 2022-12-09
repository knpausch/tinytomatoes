import React from 'react'
import './MovieDetails.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const MovieDetails = ({ singleMovie, displayHome }) => {
    return (
        <div className='movieDetailContainer'>
            <NavLink to='/'><button onClick={() => displayHome()} className ='homeButton'>Home</button></NavLink>
            <div className='movieDetails'>
                <img className='poster-mini' src={singleMovie.poster_path} />
                <div className='movieInfo'>
                    <h2>{singleMovie.title}</h2>
                    {singleMovie.tagline && <p>"{singleMovie.tagline}"</p>}
                    {(singleMovie.genres != undefined && singleMovie.genres.length>0) && <p>Genres: {formatGenres(singleMovie.genres)}</p>}
                    {singleMovie.average_rating && <p>Rating: {formatRating(singleMovie.average_rating)}</p>}
                    <br></br>
                    {singleMovie.overview && <h3>Overview:</h3>}
                    {singleMovie.overview && <p>{singleMovie.overview}</p>}
                    <br></br>
                    {singleMovie.release_date && <p>Release Date: {formatDate(singleMovie.release_date)}</p>}
                    {singleMovie.runtime>0 && <p>Runtime: {singleMovie.runtime} min</p>}
                    {singleMovie.budget>0 && <p>Budget: ${formatCurrency(singleMovie.budget)}</p>}
                    {singleMovie.revenue>0 && <p>Revenue: ${formatCurrency(singleMovie.revenue)}</p>}
                </div>
            </div>
        </div>
    )
}

const formatGenres = (genres) => {
  return genres.join(", ")
} 

const formatRating = (rating) => {
  return Math.round(rating/2)
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

MovieDetails.propTypes = {
    singleMovie: PropTypes.object.isRequired,
    displayHome: PropTypes.func.isRequired
  }