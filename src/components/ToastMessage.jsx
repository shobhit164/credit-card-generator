import React from "react";
import "../styles/ToastMessage.css";
import Approval from "../resources/Approval.png"
import { FcOk } from "react-icons/fc";

function ToastMessage({ message }) {
  return (
    <>
      <div className="toast-message">
         <p> <FcOk /> {message} </p>
      </div>
      <img src={Approval} className= "approval_img" alt = " green tick image for approval "/> 
    </>
  );
}

export default ToastMessage;
