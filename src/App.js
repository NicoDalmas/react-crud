import React from 'react';

import logo from './logo.svg';
import './App.css';

import List from "./components/List";
import Create from "./components/Create";

import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
        
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="nav navbar-nav">
          <a class="nav-item nav-link active" href="/">System <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/create">Create Employe</a>
      </div>
    </nav>

    <img src={logo} className="App-logo" alt="logo" />

    <Route exact path="/" component={List}></Route>
    <Route path="/create" component={Create}></Route>

    </div>
    </Router>
  );
}

export default App;
