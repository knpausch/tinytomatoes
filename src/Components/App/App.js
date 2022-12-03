// import movieData from '../../sampleData'
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
      movies: [],
      singleMovie: "",
      movieID: ""
    } 
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {this.setState({movies: data.movies})})
  }

  seeMovieDetails = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => {this.setState({singleMovie: data, movieID: id})})
  }

  // displayHome = () => {
  //   this.setState({movies: movieData, singleMovie: ""})
  // }

  render() {
    return (
      <main>
        <header>
          <img className='logo' src={logo} alt='cherry tomatoes on vine'/>
          <h1>Tiny Tomatoes</h1>
        </header>
        <Movies movies={this.state.movies} seeMovieDetails={this.seeMovieDetails} />
        {/* {this.state.singleMovie === "" ? 
        <Movies movies={this.state.movies} seeMovieDetails={this.seeMovieDetails} /> : 
        <MovieDetails singleMovie={this.state.singleMovie} displayHome={this.displayHome}/>} */}
      </main>
    )
  }
}

export default App
