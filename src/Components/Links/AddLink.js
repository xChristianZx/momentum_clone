import React, { Component } from "react";
import classNames from "classnames";

class AddLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addLink: false
    };
  }

  addLinkToggle = () => {
    if (this.state.addLink === false) {
      this.setState({ addLink: true });
    } else {
      this.setState({ addLink: false });
    }
  };

  render() {
    let linkFormToggle = classNames({
      "add-link-form": true,
      hidden: !this.state.addLink
    });
    let linkLabelToggle = classNames({
      "add-link-click-label": true,
      hidden: this.state.addLink
    });
    return (
      <div className="add-link-container">
        <div className={linkLabelToggle} onClick={this.addLinkToggle}>
          <span>New Link</span>
        </div>
        <div className={linkFormToggle}>
          <form onSubmit={this.props.handleSubmit}>
            <input
              className="add-link-input"
              name="name"
              type="text"
              placeholder="Name"
              value={this.props.name}
              onChange={this.props.handleChange}
            />
            <input
              className="add-link-input"
              name="url"
              type="text"
              placeholder="URL"
              value={this.props.url}
              onChange={this.props.handleChange}
            />
            <input className="add-link-input-button" type="submit" value="+" />
          </form>
          <span className="add-link-close-button" onClick={this.addLinkToggle}>
            X
          </span>
        </div>
      </div>
    );
  }
}

export default AddLink;
