import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper/index";
import Footer from "./components/Footer/index";
import Substitution from "./pages/home";
import Recipe from "./pages/recipes";
import Saved from "./pages/saved";
import Signup from "./pages/signup";
import LogIn from "./pages/login";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios
      .get('/user/')
      .then(response => {
        console.log('User response: ')
        console.log(response.data)
        if (response.data.user) {
          console.log('A user is saved in this session')

          this.setState({
            loggedIn: true,
            username: response.data.username
          })
        } else {
          console.log('No user');
          this.setState({
            loggedIn: false,
            username: null
          })
        }
      })
  }
  
  // _logout(event) {
	// 	event.preventDefault()
	// 	console.log('logging out')
	// 	axios.post('/auth/logout').then(response => {
	// 		console.log(response.data)
	// 		if (response.status === 200) {
	// 			this.setState({
	// 				loggedIn: false,
	// 				user: null
	// 			})
	// 		}
	// 	})
	// }

	// _login(username, password) {
	// 	axios
	// 		.post('/auth/login', {
	// 			username,
	// 			password
	// 		})
	// 		.then(response => {
	// 			console.log(response)
	// 			if (response.status === 200) {
	// 				this.setState({
	// 					loggedIn: true,
	// 					user: response.data.user
	// 				})
	// 			}
	// 		})
	// }

  render() {
    return (
      <Router>
        <div>
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Substitution} />
              <Route exact path="/recipes" component={Recipe} />
              <Route exact path="/saved" component={Saved} />
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/login" component={LogIn}/>
            </Switch>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
