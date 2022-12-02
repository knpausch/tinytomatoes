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
        <div>
          <img className='logo' src="../images/cherry-tomato.png' alt='cherry tomatoes on vine"/>
          <h1>Tiny Tomatoes</h1>
        </div>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App
