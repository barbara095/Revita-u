import React from "react";
import Card from "../Card";
import "./style.css";

function RecipeResults(props) {
  return (
    <div className="recipe-results">
      <Card />
      <ul className="list-group search-results">
        {props.results.map(recipe => (
          <li key={recipe.title} className="list-group-item">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} className="img-fluid" />
            <a href={recipe.url}>{props.url}</a>
            <p>Link: {recipe.url}</p>
            <p>Source: {recipe.source}</p>
            <p>Labels: {recipe.labels}</p>
            <h3>Nutritional Information</h3>
            <p>Calories: {recipe.calories}</p>
            <p>Carbs: {recipe.carbs}</p>
            <p>Fat: {recipe.fat}</p>
            <p>Protein: {recipe.protein}</p>
            <p>Sugar: {recipe.sugar}</p>
            <p>Sodium: {recipe.sodium}</p>
            <button className="saveRecipe btn btn-primary" id={recipe.id} onClick={(event) => props.handleSaved(event)}>
              Save
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default RecipeResults;