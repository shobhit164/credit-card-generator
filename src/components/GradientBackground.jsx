import React from "react";
import "../styles/GradientBackground.css";
import Background from "../resources/Background.png";

function GradientBackground() {
  return (
    <div className="gradient-bg">
      <img src={Background} alt="gradient left side background" />
    </div>
  );
}

export default GradientBackground;
