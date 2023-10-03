import React, { useState } from 'react'
import "../styles/CardInfoForm.css"


function CardInfoForm() {
  let[ name, setName ] = useState('');
  let[ cardNumber, setCardNumber ] = useState('');
  let[ validUpto, setValidUpto ] = useState('');
  let[ cvc, setCvc ] = useState('');
  let[ error, setError ] = useState(false);
  
 const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length == 0 || cardNumber.length == 0 || validUpto.length == 0 || cvc.length == 0  ){
      setError(true)
    }
  }

  return (
    <main>
    <form className='info-form' onSubmit = {handleSubmit}>
      <fieldset>
        <legend>CARDHOLDER NAME</legend>
        <input onChange = {e => setName(e.target.value)} type= 'text' name='name' placeholder='e.g. Jane Appleseed' autoComplete="current-password" />
        {error && name.length <= 0 ? <p> Cardholder name required! </p> : "" }
        <p className='error'></p>
      </fieldset>

      <fieldset>
        <legend>CARD NUMBER</legend>
        <input onChange = {e => setCardNumber(e.target.value)} type='text' name='number' placeholder='e.g. 1234 5678 9123 0000' autoComplete= "current-password" maxLength={16}/>
        {error && cardNumber.length <= 0  ? <p> Card number required! </p> : "" }
        <p className='error'></p>
      </fieldset>

      <fieldset>
        <legend>EXP. DATE (MM/YY)</legend>
        <input onChange = {e => setValidUpto(e.target.value)}  type='number' name= 'month' placeholder='MM' min={1} max={12} />
        <input onChange = {e => setValidUpto(e.target.value)}  type='number' name= 'year' placeholder='YY' min={1} max={99} />
        {error && validUpto.length <= 0 ? <p> Expiry date required!</p> : "" }
        <p className='error'></p>
      </fieldset>

      <fieldset>
        <legend>CVC</legend>
        <input onChange = {e => setCvc(e.target.value)}  type='password' name='cvc' placeholder='e.g. 123' minLength={3} maxLength={3} autoComplete= "current-password" />
        {error && cvc.length <= 0 ? <p> CVC required!</p> : "" }
        <p className='error'></p>
      </fieldset>

      <input type= 'submit' value= 'Confirm' />

    </form>
    </main>
  )
}

export default CardInfoForm