import React, { useState } from "react";
import axios from 'axios';
import { Button, Form, Segment } from 'semantic-ui-react'
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import { Container, Row, Col } from "../Grid";
import './style.css';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("first name is " + firstname);
    console.log("last name is " + lastname);
    console.log("username is " + username);
    console.log("password is " + password);
    
    axios.post('/signup', {
      username: username,
      password: password
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
                  onSubmit={handleSubmit}>
                  <div className="form-group">
                    <Form.Input
                      fluid label="First name"
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      onChange={e => setFirstname(e.target.value)}
                    />
                    <Form.Input
                      fluid label="Last name"
                      type="text"
                      placeholder="Last name"
                      name="lastname"
                      onChange={e => setLastname(e.target.value)}
                    />
                    <Form.Input
                      fluid label="Username"
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={e => setUsername(e.target.value)}
                    />
                    <Form.Input
                      fluid label="Password"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={e => setPassword(e.target.value)}
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

export default Signup;
