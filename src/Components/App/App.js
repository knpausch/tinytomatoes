import Movies from '../Movies/Movies'
import './App.css'
import { Component } from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Route, Switch } from 'react-router-dom'
import RatingFilter from '../RatingFilter/RatingFilter'
import Status404 from '../Status404/Status404'
const logo = require('../../Images/cherry-tomato.png')

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMovie: {},
      rating: 0,
      error: "",
      filteredMovies: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies, filteredMovies: data.movies, loading: false }))
      .catch(error => this.setState({ error: "Oops, something went wrong. Please try again later." }))
  }

  seeMovieDetails = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => { this.setState({ singleMovie: data.movie }) })
      .catch(error => this.setState({ error: "Oops, something went wrong. Please try again later." }))
  }

  displayHome = () => {
    this.setState({ singleMovie: {} })
    this.filterByRating("0")
  }

  filterByRating = (numStars) => {
    numStars = parseInt(numStars)
    let filteredList = this.state.movies.filter(movie => {
      return numStars === 0 ? movie : Math.round(movie.average_rating/2)===numStars
    })
    this.setState({ filteredMovies: filteredList, rating: numStars})
  }

  render() {
    return (
      <main>
        <header>
          <img className='logo' src={logo} alt='cherry tomatoes on vine' />
          <h1>Tiny Tomatoes</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() => {
            return this.state.error ? <h2>{this.state.error}</h2> :
              <div>
                <RatingFilter filterByRating={this.filterByRating} /> 
                <Movies movies={this.state.filteredMovies} loading={this.state.loading} seeMovieDetails={this.seeMovieDetails} />
              </div>
          }} />
          <Route exact path="/movie/:id" render={() => {
            return this.state.error ? <h2>{this.state.error}</h2> :
              <MovieDetails singleMovie={this.state.singleMovie} displayHome={this.displayHome} />
          }} />
          <Route component={Status404}/>
        </Switch>
      </main>
    )
  }
}

export default App
