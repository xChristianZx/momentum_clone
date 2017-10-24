import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  openSearch = () => {
    const param = this.state.text;
    const googURL = `https://www.google.com/search?q=${param}`;
    window.open(googURL, "_blank");
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.openSearch();
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
