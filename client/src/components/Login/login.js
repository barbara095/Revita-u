import React, { useState } from "react";
import axios from 'axios'
import { Container, Row, Col } from "../Grid";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);

    axios.post('/login', {
      username: username,
      password: password
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

  return (
    <div className="sign-in-form">
    <Container className="container" fluid>
      <Row>
        <Col size="md-4" mx auto >
          <Segment inverted>
            <div className="sign-in-header">
              <h3 className="header">Welcome to Revita-U!</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <Form inverted>
                <div className="form-group">
                  <Form.Input
                    fluid label="Username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={e => setUsername(e.target.value)}
                  />
                  <Form.Input
                    fluid label="Password"
                    type="text"
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
            </form>
          </Segment>
        </Col>
        </Row>
    </Container>
  </div>

  );
}

export default Login;
