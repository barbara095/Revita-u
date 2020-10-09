import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import Wrapper from "../Wrapper";
import SearchForm from "../searchForm";
import Card from "../Card";
import RecipeResults from "../recipeResults";
import { Grid } from 'semantic-ui-react';
import FormBtn from "../Button";
import API from "../../utils/API";
import './style.css';

function RecipeContainer() {

  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");


  const handleInputChange = e => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (!recipes) {
      return;
    }

  }, [recipes]);

  const handleFormSubmit = e => {
    e.preventDefault();

    console.log(searchRecipes);
    API.searchRecipe(searchRecipes)
    .then(recipes => {
		console.log(recipes);
      if (recipes.length === 0) {
        throw new Error("No recipes found");
      }
      setRecipes(recipes);
    })
    .catch(err => console.log(err));
  }

  return (
    <>
    <Container fluid style={{ minHeight: "100vh" }} className="container-recipe">
      <Wrapper className="wrapper-recipe">
        <div className="recipe-search-form">
      <Row>
        <Col size="sm-8">
          <SearchForm
            results={searchRecipes}
            handleInputChange={handleInputChange}
            placeholder="Search recipes by ingredient!"
          />
          <FormBtn
            onClick={handleFormSubmit}
            type="success"
          >
          </FormBtn>
        </Col>
      </Row>
      </div>
      <Col size="sm-6">
            <Card>
				<RecipeResults
					results={recipes}
				/>

            </Card>
      </Col>
      </Wrapper>
    </Container>
    </>
  );

};

export default RecipeContainer;
