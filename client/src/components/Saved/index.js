import React, { Component } from "react";
import API from "../../utils/API";
import RecipeResults from "../recipeResults";
import { Container, Row, Col } from "../Grid";
import "./style.css";

class SavedRecipes extends Component {

  state = {
    recipes: []
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    API.getRecipes()
      .then(res => this.setState({
        recipes: res.data
      })
      )
      .catch(err => console.log("Error: ", err))
  };


  render() {

    return (
      <Container>
        <div className="saved-recipes">
        <Row>
              <Col size="sm-6">
                {this.state.recipes.map(recipe => (
                  <RecipeResults
                    key={recipe._id}
                    title={recipe.title}
                    image={recipe.image}
                    url={recipe.url}
                    ingredients={recipe.ingredients}
                  />
                
                ))}
                
                  
              </Col>
            </Row>
        </div>
      </Container>
    )
  };
}

export default SavedRecipes;