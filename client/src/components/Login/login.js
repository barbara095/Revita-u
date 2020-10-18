import React, { Component, useState } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Segment } from 'semantic-ui-react';
import { Container, Row, Col } from "../Grid";

class Login extends Component {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [logIn, setLogIn] = useState(false);
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("username is " + this.state.username);
    console.log("password is " + this.state.password)
    // this.props.login(this.state.username, this.state.password)
    // this.setState({
    //   redirectTo: '/'
    // })
    axios
      .post('/auth/login', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log('login response')
        console.log(response)

        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          })
          this.setState({
            redirectTo: '/'
          })
        }
      }).catch(error => {
        console.log("Error logging in: ")
        console.log(error);
      })
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="sign-in-form">
          <Container className="container" fluid>
            <Row>
              <Col size="md-4" mx auto >
                <Segment inverted>
                  <div className="sign-in-header">
                    <h3 className="header">Welcome to Revita-U!</h3>
                  </div>

                  <Form
                    inverted
                    onSubmit={this.handleSubmit}>
                    <div className="form-group">
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
          </Container>
        </div>

      );
    }
  }
}

export default Login;
