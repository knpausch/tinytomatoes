import movieData from '../../sampleData'
import Movies from '../Movies/Movies'
import './App.css'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: movieData
    } 
  }

  render() {
    return (
      <main>
        <h1>Tiny Tomatoes</h1>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App
