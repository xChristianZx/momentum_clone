import React, { Component } from "react";

class AddLink extends Component {
  render() {
    return (
      <li>
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
          <input
            name="url"
            type="text"
            placeholder="url"
            value={this.props.url}
            onChange={this.props.handleChange}
          />
          <input type="submit" value="+"/>
        </form>
      </li>
    );
  }
}

export default AddLink;
