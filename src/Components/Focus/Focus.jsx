import React, { Component } from "react";
import "./Focus.css";

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: "",
      completed: false,
      goalSubmitted: false
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    this.setState({
      goalSubmitted: true
    });
    e.preventDefault();
  };

  deleteGoal = e => {
    e.preventDefault();
    this.setState({
      goal: "",
      goalSubmitted: false,
      completed: false
    });
  };

  render() {
    const focusFormStyles = this.state.goalSubmitted
      ? { visibility: "hidden" }
      : { visibility: "visible" };
    const goalSubmittedStyles = this.state.goalSubmitted
      ? { visibility: "visible" }
      : { visibility: "hidden" };
    return (
      <div className="focus-form-container">
        <div style={focusFormStyles}>
          <h3>What is your main focus today?</h3>
          <form className="focus-form" onSubmit={this.handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="goal"
              onChange={this.handleChange}
              value={this.state.goal}
            />
          </form>
        </div>
        <div className="main-goal-container" style={goalSubmittedStyles}>
          <h3>Today</h3>
          <form>
            <label>
              <input
                type="checkbox"
                name="completed"
                checked={this.state.completed}
                onChange={this.handleChange}
              />
              {this.state.goal}
            </label>
            <button onClick={this.deleteGoal}>BUTTON</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Focus;
