import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/index";
import Substitution from "./pages/Home/index";
import Recipe from "./pages/Recipe/index";
import Blog from "./pages/Blog/index";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={Substitution} />
        <Route exact path="/recipes" component={Recipe} />
        <Route exact path="/blog" component={Blog} />
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
