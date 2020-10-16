import React from "react";
import Card from "../Card";
import "./style.css";

function IngredientsResults(props) {
  return (
    <div className="recipe-results">
    <Card />
    <ul className="list-group search-results">
      <h2>Alternatives:</h2>
      <p>{props.substitution}</p>
    {/* {props.results.map(ingredient => (
        <li key={ingredient.response} className="list-group-item">
        <h2>Alternatives: </h2>
        <p>{ingredient.response.alternatives}</p>
        
      </li>
      ))} */}
    </ul>
   </div>
  );
}

export default IngredientsResults;