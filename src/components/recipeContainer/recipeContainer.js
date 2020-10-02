import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import SearchForm from "../recipeSearch";
import FormBtn from "../Button";
import API from "../../utils/API";

function RecipeContainer() {

  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch ] = useState("");

  // useEffect(() => {
  //   loadRecipes();
  // }, []);
 
  const handleInputChange = e => {
    const { value } = e.target;
    setSearch(value);
  }
  
  const handleFormSubmit = e => {
    e.preventDefault();

    API.searchRecipe(search)
      .then(res => {
        console.log(res.data);
        setRecipes(res.data);
      })
      .catch(err => console.log(err));
  }

    return (

      <Container fluid>
         <Row>
          <Col size="sm-8">
            <SearchForm
                value={search}
                onChange={handleInputChange}
                placeholder="Search recipes by ingredient!"
              />
          </Col>
          <Col size="sm-2">
            <FormBtn
                onClick={handleFormSubmit}
                type="success"
              >
          </FormBtn>
          </Col>
        </Row>
          <Col size="md-4">
            {/* <Card heading="Search">
              <Search
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card> */}
          </Col>
      
      </Container>
    );
  
};

export default RecipeContainer;
