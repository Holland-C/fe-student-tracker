import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Homepage path="/" />
        <Students path="/students" />
        <Students path="/students/block/:block_name" />
      </Router>
    </div>
  );
}

export default App;
