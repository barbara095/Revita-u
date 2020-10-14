import React, { useEffect, useState, Component } from "react";
import { Col, Row, Container } from "../Grid";
import Wrapper from "../Wrapper";
import SearchForm from "../searchForm";
import Card from "../Card";
import RecipeResults from "../recipeResults";
import { Grid } from 'semantic-ui-react';
import { useStoreContext } from "../../utils/globalstate";
import FormBtn from "../Button";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import './style.css';
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/actions";

function RecipeContainer(props) {

  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearch] = useState("");
  const [title, setTitle] = useState([""]);
  const [url, setUrl] = useState([""]);
  const [ingredients, setIngredients] = useState([""]);


  const handleInputChange = e => {
    const { value } = e.target;
    setSearch(value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    

    API.searchRecipe(searchRecipes)
      .then(recipes => {
        console.log(recipes);
        if (recipes.length === 0) {
          throw new Error("No recipes found");
        }
        setRecipes(recipes);
        setTitle(recipes.title);
        setUrl(recipes.url);
        setIngredients(recipes.ingredients)
        
      })
      .catch(err => console.log(err));
  };

  const handleSaved = e => {
    e.preventDefault();
    console.log(recipes);
    console.log(e.target.id);
    // dispatch({
    //   type: ADD_FAVORITE,
    //   post: state.currentPost
    // })

    let savedRecipes = recipes.filter(
      (recipe) => recipe.id === e.target.id
    );
    savedRecipes = savedRecipes[0];

    API.saveRecipe(savedRecipes)
      .then(setRecipes(recipes.map(recipe => {
          if (recipe.id === e.target.id) {
            return {
              ...recipe, buttonText: "Saved"
            }
          } else {
            return recipe;
          }
        })
      ))
      .catch((error) => console.log("Error", error));
  };


  return (
    <div className="recipe-container">
      <Jumbotron />
      <Container fluid style={{ minHeight: "100vh" }} className="container-recipe">
        <Wrapper>
          <div className="recipe-search-form">

            <SearchForm
              value={recipes}
              handleInputChange={handleInputChange}
              placeholder="Search recipes by ingredient!"
            />
            <FormBtn
              onClick={handleFormSubmit}
              type="success"
              basic color="teal"
            >
            </FormBtn>

            <Row>
              <Col size="sm-6">
                
                  <RecipeResults
                    results={recipes}
                    title={title}
                    url={url}
                    ingredients={ingredients}
                    handleSaved={handleSaved}
                  />
                
              </Col>
            </Row>
          </div>

        </Wrapper>
      </Container>
    </div>
  )


};

export default RecipeContainer;
