import React from 'react';
import CardBackView from '../resources/CardBackView.png';
import '../styles/CardCvcView.css';

function CardCvcView({ cvc }) {
  return (
    <div className='back-side  animate__animated animate__rollIn' > 
       
        <img src= {CardBackView} alt = "Card back side" /> 
        {cvc ? ( <p className='cvc'>{cvc}</p>  ) : ( <p className='cvc' data-placeholder='000'></p> )}
        
     </div>
  );
}

export default CardCvcView