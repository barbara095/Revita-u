import React from "react";
import "./style.css";

function Nutrition(props) {
  return (
    <div className="nutrition-question">
      <p>{props.answer}</p>
      <img src={props.image}></img>
    </div>
  )
}

export default Nutrition;