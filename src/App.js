import React, { Component } from "react";
import "./App.css";
// import Search from './Components/Search/Search';
// import Links from "./Components/Links/Links";
// import ToDO from "./Components/ToDo/ToDo";
import Greeting from "./Components/Greeting/Greeting";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting />
        {/* <Search /> */}
        {/* <Links /> */}
        {/* <ToDO /> */}
      </div>
    );
  }
}

export default App;
