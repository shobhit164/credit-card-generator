import React from 'react'
import "../styles/CardInfoForm.css"

function CardInfoForm() {
  return (
    <main>
    <form className='info-form'>
      <fieldset>
        <legend>CARDHOLDER NAME</legend>
        <input type= 'text' placeholder='e.g. Jane Appleseed' />
        <p className='error'></p>
      </fieldset>

      <fieldset>
        <legend>CARD NUMBER</legend>
        <input type='text' placeholder='e.g. 1234 5678 9123 0000' />
        <p className='error'></p>
      </fieldset>

      <fieldset>
        <legend>EXP.DATE (MM/YY)</legend>
        <input type='number' placeholder='MM' min={1} max={99}/>
        <input type='number' placeholder='YY' min={1} max={99}/>
        <p className='error'></p>
      </fieldset>

      <fieldset>
        <legend>CVC</legend>
        <input type='password' placeholder='e.g. 123' minLength={3} maxLength={3}/>
        <p className='error'></p>
      </fieldset>

      <input type='button' value="Confirm"/>
    </form>
    </main>
  )
}

export default CardInfoForm