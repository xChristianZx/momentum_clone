import React, { Component } from "react";
import "./Links.css";
import AddLink from "./AddLink";
import LinkItem from "./LinkItem";
import classNames from "classnames";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      fields: {
        name: "",
        url: ""
      },
      active: false
    };
  }

  componentDidMount() {
    const localKeys = Object.keys(localStorage).filter(item =>
      item.includes("links-item")
    );
    const restoredLocal = localKeys.map(item => {
      return JSON.parse(localStorage.getItem(item));
    });
    this.setState({ links: restoredLocal });
  }

  handleChange = e => {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
    console.log("state", this.state.fields);
  };

  handleSubmit = e => {
    let newLink = {
      name: this.state.fields.name,
      url: this.state.fields.url,
      id: Date.now()
    };
    const stringifyNewLink = JSON.stringify(newLink);
    localStorage.setItem(`links-item-${newLink.id}`, stringifyNewLink);

    const localKeys = Object.keys(localStorage).filter(item =>
      item.includes("links-item")
    );
    const restoredLocal = localKeys.map(item => {
      return JSON.parse(localStorage.getItem(item));
    });

    this.setState((prevState, { links }) => ({
      links: restoredLocal,
      fields: {
        name: "",
        url: ""
      }
    }));    
    e.preventDefault();
  };

  deleteItem = id => {
    localStorage.removeItem(`links-item-${id}`);
    this.setState((prevState, { links }) => ({
      links: prevState.links.filter(item => item.id !== id)
    }));
  };

  activeHandler = () => {
    if (this.state.active === false) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  render() {
    console.log("links: ", this.state.links);
    let activeLinksList = classNames({
      "links-list-container": true,
      active: this.state.active
    });
    return (
      <div className="links-container">
        <div className="links-click-label">
          <span onClick={this.activeHandler}>Links</span>
        </div>
        <div className={activeLinksList}>
          <LinkItem links={this.state.links} deleteItem={this.deleteItem} />
          <AddLink
            name={this.state.fields.name}
            url={this.state.fields.url}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Links;
