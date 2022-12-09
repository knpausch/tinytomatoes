import React from "react"
import './RatingFilter.css'

const RatingFilter = ({filterByRating}) => {
  return (
    <div className='fiter-section'>
      <button className='reset-button' >Reset</button>
      <div className='drop-down-menu'> 
        <select className='rating-options' onChange={event => filterByRating(event.target.value)} name='ratingOptions' id='ratingOptions'>
          <option value='fiveStar'>⭐⭐⭐⭐⭐</option>
          <option value='fourStar'>⭐⭐⭐⭐</option>
          <option value='threeStar'>⭐⭐⭐</option>
          <option value='twoStar'>⭐⭐</option>
          <option value='oneStar'>⭐</option>
        </select>  
      </div>
    </div>
  )
}

export default RatingFilter