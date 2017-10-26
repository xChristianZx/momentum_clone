import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick = () => {
    const date = new Date();
    const options = { hour: "numeric", minute: "numeric" };
    const fDate = date.toLocaleTimeString("en-US", options);
    this.setState({ time: fDate });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
