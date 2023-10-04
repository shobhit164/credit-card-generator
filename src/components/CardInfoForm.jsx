import React, { useState } from 'react'
import CardDetailsView from './CardDetailsView'; 
import CardCvcView  from './CardCvcView';
import "../styles/CardInfoForm.css"

function CardInfoForm() {
  let[ name, setName ] = useState('');
  let[ cardNumber, setCardNumber ] = useState('');
  let[ validUpto, setValidUpto ] = useState('');
  let[ validMonth, setValidMonth] = useState('');
  let[ cvc, setCvc ] = useState('');
  let[ error, setError ] = useState(false);
  let[ isConfirmed, setIsConfirmed ] = useState(false);
  
 const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length === 0 || cardNumber.length !== 19 || validUpto.length === 0 || cvc.length === 0  ){
      setError(true)
    } else {
      setError(false)
      setIsConfirmed(true)
    }
  };

  const formatCardNumber = (inputValue) => {
    const cleanedValue = inputValue.replace(/\D/g, '');
    const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formattedValue.substr(0, 19);
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handleNameChange = (e) => {
    const cleanedValue = e.target.value.replace(/\d/g, ''); 
    setName(cleanedValue);
  };

  const handleCvcChange = (e) => {
    const cleanedValue = e.target.value.replace(/\D/g, '');
    setCvc(cleanedValue);
  };

  return (
  <main>
    <form className='info-form' onSubmit = {handleSubmit}>
      <fieldset>
        <legend>CARDHOLDER NAME</legend>
        <input onChange = {handleNameChange} type= 'text' name='name' placeholder='e.g. Jane Appleseed' autoComplete="current-password" />
        {error && name.length <= 0 ? <p> Cardholder name required! </p> : "" }
        {error && name !== name.replace(/\d/g, '') ? <p>Only letters are allowed!</p> : ""}
        <p className='error'></p>
      </fieldset>

      <fieldset>
        <legend>CARD NUMBER</legend>
        <input onChange = {handleCardNumberChange} type='text' name='number' placeholder='e.g. 1234 5678 9123 0000' autoComplete= "current-password" maxLength={16}/>
        {error && cardNumber.length <= 0  ? <p> Card number required! </p> : "" }
        {error && !/^[0-9 ]+$/.test(cardNumber) ? <p>Only numbers are allowed!</p> : ""}
      </fieldset>

      <fieldset>
        <legend>EXP. DATE (MM/YY)</legend>
        <input onChange = {e => setValidMonth(e.target.value)}  type='number' name= 'month' placeholder='MM' min={1} max={12} />
        <input onChange = {e => setValidUpto(e.target.value)}  type='number' name= 'year' placeholder='YY' min={1} max={99} />
        {error && validUpto.length <= 0 ? <p> Expiry date required!</p> : "" }
        <p className='error'></p>
      </fieldset>

      <fieldset>
        <legend>CVC</legend>
        <input onChange = {handleCvcChange}  type='password' name='cvc' placeholder='e.g. 123' minLength={3} maxLength={3} autoComplete= "current-password" />
        {error && cvc.length <= 0 ? <p> CVC required!</p> : "" }
        {error && !/^\d+$/.test(cvc) ? <p>Only numbers are allowed!</p> : ""}
        <p className='error'></p>
      </fieldset>

      <input type= 'submit' value= 'Confirm' />

    </form>

    {isConfirmed && ( <CardDetailsView cardNumber={cardNumber} cardHolderName={name} cardValidity={validMonth} cardYear={validUpto} /> )}

    {isConfirmed && (<CardCvcView cvc = {cvc} />) }

  </main>
  )
}

export default CardInfoForm