import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/blog" component={Blog} /> */}
      </div>
    </Router>
  );
}

export default App;
