import React, { Component } from "react";
import "./Quotes.css";
import quoteList from "./quote_list";
import QuoteLayout from "./QuoteLayout.js";

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  handleClick = () => {
    const max = quoteList.length;
    const random = () => {
      return Math.floor(Math.random() * (max - 0)) + 0;
    };
    this.setState({ number: random() });
  };

  render() {
    return (
      <div className="quotes-container">
        <QuoteLayout
          quotes={quoteList}
          number={this.state.number}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Quotes;
