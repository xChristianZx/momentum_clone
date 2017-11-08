import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick = () => {
    const date = new Date();
    // const options = { hour: "numeric", minute: "numeric" };
    // const formattedDate = date.toLocaleTimeString("en-US", options);
    const hours = date.getHours();
    const fHours = hours > 12 ? hours - 12 : hours;
    const min = date.getMinutes();
    const fMin = min < 10 ? `0${min}` : min;
    const formattedDate = `${fHours}:${fMin}`;
    this.setState({ time: formattedDate });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="clock-container">
        <h1 className="clock-time">{this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
