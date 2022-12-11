import React from 'react'
import './Status404.css'
import {Link} from 'react-router-dom'

const Status404 = () => {
  return (
    <div className='redirect-container'>
      <h2>Oops, URL not found. Please try again.</h2>
      <Link to='/'>
        <button className="redirect-button">Go Back Home</button>
      </Link>
    </div>
  )
}

export default Status404