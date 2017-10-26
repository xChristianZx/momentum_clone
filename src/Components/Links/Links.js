import React, { Component } from "react";
import "./Links.css";
import AddLink from "./AddLink";
import LinkItem from "./LinkItem";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      fields: {
        name: "",
        url: ""
      }
    };
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
    this.setState((prevState, { links }) => ({
      links: prevState.links.concat(newLink),
      fields: {
        name: "",
        url: ""
      }
    }));
    console.log("SUBMITTED");
    e.preventDefault();
  };

  deleteItem = id => {
    this.setState((prevState, { links }) => ({
      links: prevState.links.filter(item => item.id !== id)
    }));
  };

  render() {
    console.log("links: ", this.state.links);
    return (
      <div className="links-container">
        <ul className="links-list">
          <LinkItem links={this.state.links} deleteItem={this.deleteItem} />
          <AddLink
            name={this.state.fields.name}
            url={this.state.fields.url}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </ul>
      </div>
    );
  }
}

export default Links;
