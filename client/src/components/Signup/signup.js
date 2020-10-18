import React, { Component, useState } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Segment } from 'semantic-ui-react'
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import { Container, Row, Col } from "../Grid";
import './style.css';

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
  }
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [loggedIn, setLoggedIn] = useState(null)
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("first name is " + this.state.firstName);
    console.log("last name is " + this.state.lastName);
    console.log("username is " + this.state.username);
    console.log("password is " + this.state.password);

    axios.post('/auth/signup', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    })

      .then(response => {
        console.log(response)
        if (response.data) {
          console.log("Successfully signed up")
          this.setState({
            redirectTo: '/login'
          })

        } else {
          console.log("Error signing up")
        }
      }).catch(error => {
        console.log("Error signing up: ")
        console.log(error);
      })
  };

  render() {
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
    return (

      <div className="sign-in-form">
        <Container className="container" fluid>
          <div className="signup-wrap">
            <Row>
              <Col size="md-4">
                <Segment inverted className="sign-in-segment">
                  <h3 className="header">Welcome to Revita-U!</h3>
                  <Form
                    inverted
                    onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <Form.Input
                        fluid label="First name"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        fluid label="Last name"
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        fluid label="Username"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        
                      />
                      <Form.Input
                        fluid label="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <Col size="md-12">
                      <button className="btn btn-success" type="submit">
                        Submit
                  </button>
                    </Col>
                  </Form>
                </Segment>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

    );
  }
}

export default Signup;
