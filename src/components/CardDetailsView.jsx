import React from 'react';
import CardFrontView from '../resources/CardFrontView.png';
import '../styles/CardDetailsView.css';
function CardDetailsView({ cardNumber, cardHolderName, month, year }) {

  return (
    <div className='front-side animate__animated animate__backInDown'>
    
      <img src={CardFrontView} alt = "Card front side"/>
      <div className='disc-1'> </div>
      <div className='disc-2'> </div>
      <p data-placeholder = '0000 0000 0000 0000' className='card-number'>{cardNumber}</p>
      <p data-placeholder = 'Jane Appleseed' className='card-holder-name'>{cardHolderName}</p>
      <p data-placeholder = '00/00' className='card-validity'>{month}{year}</p>

    </div>
)
}

export default CardDetailsView 