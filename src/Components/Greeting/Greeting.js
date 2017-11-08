import React, { Component } from "react";
import "./Greeting.css";
import Clock from "./Clock";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      timeOfDay: ""
    };
  }
  componentDidMount() {
    this.setState({ user: "Christian" });
    this.getTimeofDay();
  }

  getTimeofDay = () => {
    const date = new Date();
    const hour = date.getHours();

    const timeOfDay = time => {
      if (time < 12) {
        return "Morning";
      }
      if (time > 18) {
        return "Evevning";
      }
      return "Afternoon";
    };

    const setTOD = timeOfDay(hour);

    this.setState({ timeOfDay: setTOD });
    console.log("hour", hour, typeof hour);
  };

  render() {
    return (
      <div className="greeting-container">
        <Clock />
        <h2 className="greeting-text">
          Good {this.state.timeOfDay}, {this.state.user}
        </h2>
      </div>
    );
  }
}

export default Greeting;
