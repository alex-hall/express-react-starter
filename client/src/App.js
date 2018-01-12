import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import LandingComponent from "./components/LandingComponent";

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={LandingComponent}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
