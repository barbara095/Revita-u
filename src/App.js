import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/index";
import Home from "./pages/Home/home";
import Recipes from "./pages/Recipe/recipe";
import Blog from "./pages/Blog/blog";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/blog" component={Blog} />
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
