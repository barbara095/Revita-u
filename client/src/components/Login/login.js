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
    <div>
      <div className="mt-4">
        <h2>Welcome to Revita-U!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="8">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="8">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
}

export default Login;
