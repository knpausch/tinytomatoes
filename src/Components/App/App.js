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

  render() {
    return (
      <main>
        <header>
          <img className='logo' src={logo} alt='cherry tomatoes on vine'/>
          <h1>Tiny Tomatoes</h1>
        </header>
        {/* <Movies movies={this.state.movies}/> */}
        <MovieDetails singleMovie={this.state.singleMovie}/>
      </main>
    )
  }
}

export default App
