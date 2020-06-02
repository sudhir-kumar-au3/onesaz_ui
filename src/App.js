import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Concepts from "./components/Concepts";
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/concepts">
        <Concepts></Concepts>
      </Route>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
