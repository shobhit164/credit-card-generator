import React from 'react'
import CardBackView from '../resources/CardBackView.png'
import '../styles/CardCvcView.css'

function CardCvcView() {
  return (
    <div className='back-side'> 
       
        <img src= {CardBackView} alt = "Card back side" />
        <p className='cvc'>789</p>
        
     </div>
  )
}

export default CardCvcView