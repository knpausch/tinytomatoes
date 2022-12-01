import movieData from '../../sampleData'
import Movies from '../Movies/Movies'
import './App.css'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super() 
    this.state = []
  }

  render() {
    return (
      <main>
        <h1>Tiny Tomatoes</h1>
        <Movies />
      </main>
    )
  }
}

export default App
