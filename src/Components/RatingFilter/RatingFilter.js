import React from "react"
import './RatingFilter.css'

const RatingFilter = ({filterByRating}) => {
  return (
    <div className='fiter-section'>
      <div className='drop-down-menu'> 
        <select className='rating-options' onChange={event => filterByRating(event.target.value)} name='ratingOptions' id='ratingOptions'>
          <option value='0'>View All Movies</option>
          <option value='5'>⭐⭐⭐⭐⭐</option>
          <option value='4'>⭐⭐⭐⭐</option>
          <option value='3'>⭐⭐⭐</option>
          <option value='2'>⭐⭐</option>
          <option value='1'>⭐</option>
        </select>  
      </div>
    </div>
  )
}

export default RatingFilter