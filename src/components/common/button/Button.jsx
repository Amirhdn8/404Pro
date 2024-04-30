import React from "react";
import Style from "./button.module.css";


const Button = ({ text }) => {
  return <button className={`btn ${Style.button}`}> {text} </button>;
};

export default Button;
