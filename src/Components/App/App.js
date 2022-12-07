import Movies from '../Movies/Movies'
import './App.css'
import { Component } from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Route, NavLink } from 'react-router-dom'
const logo = require('../../Images/cherry-tomato.png')

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      singleMovie: "",
      movieID: "",
      error: "", 
    } 
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: "Oops, something went wrong. Please try again later."}))
  }

  seeMovieDetails = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => {this.setState({singleMovie: data.movie, movieID: id})})
    .catch(error => this.setState({error: "Oops, something went wrong. Please try again later."}))
  }

  displayHome = () => {
    this.setState({singleMovie: ""})
  }

  render() {
    return (
      <main>
        {/* <NavLink></NavLink> */}
        <header>
          <img className='logo' src={logo} alt='cherry tomatoes on vine'/>
          <h1>Tiny Tomatoes</h1>
        </header>
        <Route exact path="/" render={() => {
          
          return <Movies movies={this.state.movies}/>
          {console.log(this.state.movies)}
        }}/>
        
      </main>
    )
  }
}

    {/* // {(!this.state.error && !this.state.singleMovie) ? 
        // <Movies movies={this.state.movies} seeMovieDetails={this.seeMovieDetails} /> : 
        // (!this.state.error && this.state.singleMovie) ?
        // <MovieDetails singleMovie={this.state.singleMovie} displayHome={this.displayHome}/> :
        // this.state.error ? <h2>{this.state.error}</h2> : null} */}

export default App
