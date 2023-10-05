import React from "react";
import "../styles/ToastMessage.css";

function ToastMessage({ message }) {
  return (
    <div className="toast-message">
      <p>{message}</p>
    </div>
  );
}

export default ToastMessage;
