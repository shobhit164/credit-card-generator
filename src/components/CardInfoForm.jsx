import React, { useState, useRef } from "react";
import "../styles/CardInfoForm.css";
import ToastMessage from "./ToastMessage";

function CardInfoForm(props) {
  let [name, setName] = useState("");
  let [errorName, setErrorName] = useState(false);
  let [error1, setError1] = useState(false);

  let [cardNumber, setCardNumber] = useState("");
  let [errorCardNumber, setErrorCardNumber] = useState(false);
  let [error2, setError2] = useState(false);

  let [validUpto, setValidUpto] = useState("");
  let [error, setError] = useState(false);
  let [validMonth, setValidMonth] = useState("");

  let [cvc, setCvc] = useState("");
  let [errorCvc, setErrorCvc] = useState(false);
  let [error3, setError3] = useState(false);

  let clearForm = useRef(null);
  let [showToast, setShowToast] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();

    if ( name.length === 0 || cardNumber.length === 0 || validUpto.length === 0 ||  cvc.length === 0) {
      setError(true);
      setError1(true);
      setError2(true);
      setError3(true);
      
    } else {
      setError(false);
    }
    
    if ( name.length === 0 || cardNumber.length !== 19 ||  validUpto.length === 0 || cvc.length !== 3 ) {
      return;
    } else {
      setShowToast(true);
    }
    
    let card = { 
      name: name,
      number: cardNumber,
      month: validMonth + "/",
      year: validUpto,
      cvc: cvc,
    };

    props.cardFunc(card);

    if (clearForm.current) {
      clearForm.current.reset();
    }
  };

  let handleNameChange = (e) => {
    let cleanedValue = e.target.value.replace(/\d/g, " ");
    setName(cleanedValue);

    if (e.target.value.match(/\d/)) {
      setError1(false);
      setErrorName(true);
      return
    } else {
      setErrorName(false);
    }
  };

  let formatCardNumber = (inputValue) => {
    let cleanedValue = inputValue.replace(/\D/g, "");
    let formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formattedValue.substr(0, 19);
  };

  let handleCardNumberChange = (e) => {
    let formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);

    if (e.target.value.match(/\D/)) {
      setError2(false);
      setErrorCardNumber(true);
    } else {
      setErrorCardNumber(false);
    }
  };

  let handleCvcChange = (e) => {
    let cleanedValue = e.target.value.replace(/\D/g, "");
    setCvc(cleanedValue);

    if (e.target.value.match(/\D/)) {
      setError3(false);
      setErrorCvc(true);
    } else {
      setErrorCvc(false);
    }
  };

  return (
    <main>
    <form ref={clearForm} className = "info-form" onSubmit={handleSubmit}>

        <fieldset>
          <legend>CARDHOLDER NAME</legend>
          <input onChange={handleNameChange} type="text" name="name" placeholder="e.g. Jane Appleseed" autoComplete="current-password" />
          {error1 && name.length <= 0 ? <p> Cardholder name required! </p> : ""}
          {errorName ? <p>Only ALPHABETS are allowed!</p> : ""}
        </fieldset>

        <fieldset>
          <legend>CARD NUMBER</legend>
          <input onChange={handleCardNumberChange} type="text" name="number" placeholder="e.g. 1234 5678 9123 0000" 
           autoComplete="current-password" maxLength={16} />
          {error2 && cardNumber.length <= 0 ? ( <p> Card number required! </p> ) : (" ")}
          {errorCardNumber ? <p>Only 16 DIGITS are allowed!</p> : " "}
        </fieldset>

        <fieldset>
          <legend>EXP. DATE (MM/YY)</legend>
          <input className="custom-number-input" onChange={(e) => setValidMonth(e.target.value)} type="number" name="month" placeholder="MM"
            min={1} max={12} maxLength={2} />
          <input  className="custom-number-input" onChange={(e) => setValidUpto(e.target.value)} type="number" name="year" placeholder="YY"
            min={1} max={99} maxLength={2} />
          {error && validUpto.length <= 0 ? <p> Expiry date required!</p> : ""}
        </fieldset>

        <fieldset>
          <legend>CVC</legend>
          <input onChange={handleCvcChange} type="password" name="cvc" placeholder="e.g. 123" minLength={3} maxLength={3} autoComplete="current-password" />
          {error3 && cvc.length <= 0 ? <p> CVC required!</p> : ""}
          {errorCvc ? <p>Cvc must be numeric!</p> : ""}
        </fieldset>

        <input type="submit" value="Confirm" disabled={errorName} />

      </form>
   
        {showToast && <ToastMessage message="Congratulations, your card details are successfully submitted." />}

    </main>
  );
}
export default CardInfoForm;


