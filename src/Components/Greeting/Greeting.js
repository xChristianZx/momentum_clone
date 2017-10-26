import React, { Component } from "react";
import './Greeting.css';
import Clock from "./Clock";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      time: ""
    };
  }
  componentDidMount() {
    this.setState({ user: "Christian" });
    this.getTimeofDay();
  }

  getTimeofDay = () => {
    const date = new Date();
    const hour = date.getHours();

    const timeOfDay = hour < 12 ? "Morning" : "Evening";

    this.setState({ time: timeOfDay });
    console.log("hour", hour, typeof hour);
  };

  render() {
    return (
      <div className="greeting-container">
        <Clock />
        <h2>
          Good {this.state.time}, {this.state.user}
        </h2>
      </div>
    );
  }
}

export default Greeting;
