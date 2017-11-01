import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search/Search";
// import Links from "./Components/Links/Links";
import ToDO from "./Components/ToDo/ToDo";
import Greeting from "./Components/Greeting/Greeting";
import Focus from "./Components/Focus/Focus.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Links /> */}
        <Search />
        <Greeting />
        <Focus />
        <ToDO />
      </div>
    );
  }
}

export default App;
