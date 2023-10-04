import React, { useState } from "react";
import "./App.css";
import GradientBackground from "./components/GradientBackground";
import CardDetailsView from "./components/CardDetailsView";
import CardCvcView from "./components/CardCvcView";
import CardInfoForm from "./components/CardInfoForm";

function App() {
  let [card, setCard] = useState({});

  let cardFunc = (data) => {
    setCard(data);
  };

  return (
    <>
      <GradientBackground />
      <CardDetailsView
        cardNumber={card.number}
        cardHolderName={card.name}
        month={card.month}
        year={card.year}
      />
      <CardCvcView cvc={card.cvc} />
      <CardInfoForm cardFunc={cardFunc} />
    </>
  );
}

export default App;
