import React from 'react';

import logo from './logo.svg';
import './App.css';

import List from "./components/List";
import Create from "./components/Create";
import Edit from './components/Edit';

import { Route, BrowserRouter as Router } from "react-router-dom";

import { Link } from "react-router-dom";


function App() {
  return (
    <Router>
    
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>System <span class="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to={"/create"}>Create Employee</Link>
          <Link className="nav-item nav-link" to={"/edit"}>Edit Employee</Link>
      </div>
    </nav>
    
    <div className="container">
        

    <img src={logo} className="App-logo" alt="logo" />

    <Route exact path="/" component={List}></Route>
    <Route path="/create" component={Create}></Route>
    <Route path="/edit" component={Edit}></Route>

    </div>
    </Router>
  );
}

export default App;
