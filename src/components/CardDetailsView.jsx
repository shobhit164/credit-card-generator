import React from 'react'
import CardFrontView from '../resources/CardFrontView.png'
import '../styles/CardDetailsView.css'

function CardDetailsView() {
  return (
    <div className='front-side'>
     
      <img src={CardFrontView} alt = "Card front side"/>
      <div className='disc-1'> </div>
      <div className='disc-2'> </div>
      <p className='card-number'>2934 5678 9002 1280</p>
      <p className='card-holder-name'>JANE APPLESEED</p>
      <p className='card-validity'>12/69</p>

    </div>

)
}

export default CardDetailsView