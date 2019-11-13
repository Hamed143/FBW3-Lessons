import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Dashboard from './Dashboard.js';
import Topics from './Topics.js';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
          <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr></hr>
     
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
       </div>
      </Router>
      
    );
  }
}
// ToDo: Place Home, About and Dashboard in separate modules
