import React from "react";
import TwitterLink from "./TwitterLink";

const QuoteLayout = props => {
  const quotes = props.quotes;
  const number = props.number;
  return (
    <div className="quote-layout-container">
      <div className="quote-display">
        <p className="quote-item" onClick={props.handleClick}>
          {quotes[number].quote}
        </p>
      </div>
      <div className="author-twitter-container">
        <p className="author">{quotes[number].author}</p>
        <span className="twitter-container">
          <TwitterLink quotes={quotes} number={number} />
        </span>
      </div>
    </div>
  );
};

export default QuoteLayout;
