import movieData from '../../sampleData'
import Movies from '../Movies/Movies'
import './App.css'
import { Component } from 'react'
import selectedMovieData from '../../sampleData2'
import MovieDetails from '../MovieDetails/MovieDetails'
const logo = require('../../Images/cherry-tomato.png')

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: movieData,
      singleMovie: ""
    } 
  }

  seeMovieDetails = () => {
    this.setState({movies: movieData, singleMovie: selectedMovieData})
  }

  displayHome = () => {
    this.setState({movies: movieData, singleMovie: ""})
  }

  render() {
    return (
      <main>
        <header>
          <img className='logo' src={logo} alt='cherry tomatoes on vine'/>
          <h1>Tiny Tomatoes</h1>
        </header>
        {this.state.singleMovie === "" ? 
        <Movies movies={this.state.movies} seeMovieDetails={this.seeMovieDetails} /> : 
        <MovieDetails singleMovie={this.state.singleMovie} displayHome={this.displayHome}/>}
      </main>
    )
  }
}

export default App
