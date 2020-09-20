import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Search from "./SearchForm";
import Recipe from "../Recipe/Recipe";
import API from "../../utils/API";

class RecipeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchRecipes("");
  }

  searchRecipes = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      search: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  }

  renderMovie = () => {
    if (this.state.result.Response === false) {
      return <div>This movie does not exist!</div>
    } else {
      return;
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {/* {this.renderMovie()} */}
              {
                this.state.result.Response !== "false" && (
                  <Recipe
                    title={this.state.result.Title}
                    src={this.state.result.Poster}
                    director={this.state.result.Director}
                    genre={this.state.result.Genre}
                    released={this.state.result.Released}
                  />
                )
              }

            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <Search
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecipeContainer;
