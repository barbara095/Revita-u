import React from "react";
import RecipeContainer from "../components/recipeContainer/recipeContainer";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import { Container } from "../components/Grid";

function Recipe() {
    return (
      <>
      <Jumbotron />
      <RecipeContainer />
      </>
    );
  
};

export default Recipe;
