import React from "react";
import Card from "../Card";
import "./style.css";

function RecipeResults(props) {
  return (
    <>
    <Card />
    <ul className="list-group search-results">
      {props.results.map(recipe => (
        <li key={recipe.title} className="list-group-item">
        <h2>{recipe.title}</h2>
        <a href={recipe.url}>{props.url}</a>
      </li>
      ))}
    </ul>
   </>
  );
}

export default RecipeResults;
