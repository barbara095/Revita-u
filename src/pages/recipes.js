import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
// import Card from "./components/Card";
import API from "../utils/API";

function Recipes() {

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
          <Col size="md-8">
            {/* <Card > */}

            {/* </Card> */}
          </Col>
          <Col size="md-4">
            {/* <Card heading="Search">
              <Search
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card> */}
          </Col>
        </Row>
      </Container>
    );
  
};

export default Recipes;
