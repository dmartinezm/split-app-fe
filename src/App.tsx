import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
};

export default App;
