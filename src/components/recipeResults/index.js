import React from "react";
import Card from "../Card";
import "./style.css";

function RecipeResults(props) {
  return (
    <>
    <Card />
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
        <h2>{props.title}</h2>
        <a href={props.url}>{props.url}</a>
      </li>
      ))}
    </ul>
    </>
  );
}

export default RecipeResults;