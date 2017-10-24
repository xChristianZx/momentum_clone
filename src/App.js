import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search/Search';
import Links from "./Components/Links/Links";

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Search /> */}
       <Links />
      </div>
    );
  }
}

export default App;
