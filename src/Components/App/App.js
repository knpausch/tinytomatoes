import Movies from '../Movies/Movies'
import './App.css'
import { Component } from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Route } from 'react-router-dom'
import RatingFilter from '../RatingFilter/RatingFilter'
const logo = require('../../Images/cherry-tomato.png')

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMovie: {},
      movieID: "",
      rating: 0,
      error: "",
      filteredMovies: []
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies, filteredMovies: data.movies }))
      .catch(error => this.setState({ error: "Oops, something went wrong. Please try again later." }))
  }

  seeMovieDetails = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => { this.setState({ singleMovie: data.movie, movieID: id }) })
      .catch(error => this.setState({ error: "Oops, something went wrong. Please try again later." }))
  }

  displayHome = () => {
    this.setState({ singleMovie: {} })
    this.filterByRating("0")
  }

  filterByRating = (numStars) => {
    console.log("You selected: ", numStars)
    console.log(this.state.movies.length)
    numStars = parseInt(numStars)
    let filteredList = this.state.movies.filter(movie => {
      if (numStars === 0) {
        console.log("HELLOOOOOOO")
        return movie
      } else {
        return Math.round(movie.average_rating/2)===numStars
      }
    })
    this.setState({ filteredMovies: filteredList, rating: numStars})
    console.log("Filtered List: ", filteredList)
  }

  render() {
    return (
      <main>
        <header>
          <img className='logo' src={logo} alt='cherry tomatoes on vine' />
          <h1>Tiny Tomatoes</h1>
        </header>
        <Route exact path="/" render={() => {
          return this.state.error ? <h2>{this.state.error}</h2> :
            <div>
              <RatingFilter filterByRating={this.filterByRating} />
              <Movies movies={this.state.filteredMovies} seeMovieDetails={this.seeMovieDetails} />
            </div>
        }} />
        <Route exact path="/:id" render={() => {
          return this.state.error ? <h2>{this.state.error}</h2> :
            <MovieDetails singleMovie={this.state.singleMovie} displayHome={this.displayHome} />
        }} />
      </main>
    )
  }
}

export default App
