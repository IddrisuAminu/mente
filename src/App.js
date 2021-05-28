import './App.css';
import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
