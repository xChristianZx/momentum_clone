import React, { Component } from "react";
import "./Focus.css";
import classNames from "classnames";

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
    let focusFormClass = classNames({
      "add-main-goal-container": true,
      hidden: this.state.goalSubmitted
    });
    let mainGoalClass = classNames({
      "main-goal-container": true,
      hidden: !this.state.goalSubmitted
    });

    return (
      <div className="focus-form-container">
        <div className={focusFormClass}>
          <h3>What is your main focus today?</h3>
          <form className="focus-form" onSubmit={this.handleSubmit}>
            <input
              className="focus-form-input"
              type="text"
              name="goal"
              onChange={this.handleChange}
              value={this.state.goal}
            />
          </form>
        </div>
        <div className={mainGoalClass}>
          <h3>Today</h3>
          <div className="main-goal-form">
            <span>
              <input
                type="checkbox"
                name="completed"
                checked={this.state.completed}
                onChange={this.handleChange}
              />
            </span>
            <h3>{this.state.goal}</h3>
            <span>
              <button onClick={this.deleteGoal}>X</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Focus;
