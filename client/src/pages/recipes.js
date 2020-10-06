import React from "react";
import RecipeContainer from "../components/recipeContainer/recipeContainer";
import Wrapper from "../components/Wrapper";
import { Container } from "../components/Grid";

function Recipe() {
    return (
      <Container fluid>
        <Wrapper>
      <RecipeContainer />
      </Wrapper>
      </Container>
    );
  
};

export default Recipe;
