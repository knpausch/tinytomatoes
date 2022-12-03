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
      singleMovie: selectedMovieData
    } 
  }

  seeMovieDetails = (id) => {
    this.setState({singleMovie: selectedMovieData.overview})
    console.log("yay" + id)
  }

  render() {
    return (
      <main>
        <header>
          <img className='logo' src={logo} alt='cherry tomatoes on vine'/>
          <h1>Tiny Tomatoes</h1>
        </header>
        <Movies movies={this.state.movies} seeMovieDetails={this.seeMovieDetails} />
        <MovieDetails singleMovie={this.state.singleMovie} />
      </main>
    )
  }
}

export default App
