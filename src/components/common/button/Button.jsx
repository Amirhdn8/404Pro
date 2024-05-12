import React from "react";
import Style from "./button.module.css";


const Button = ({ text , type , otherClasses }) => {
  return <button type={type} className={`btn ${Style.button} ${otherClasses}`}> {text} </button>;
};

export default Button;
