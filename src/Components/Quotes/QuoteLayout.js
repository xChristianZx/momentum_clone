import React from "react";
import TwitterLink from "./TwitterLink";

const QuoteLayout = props => {
  return (
    <div className="quote-layout-container">
      <div className="display">
        <p className="quote-item">{props.quotes[props.number].quote}</p>
      </div>
      <div className="author-button-container">
        <p className="author">~ {props.quotes[props.number].author}</p>
        <div className="button-container">
          <button className="button-next" onClick={props.handleClick}>
            Next!
          </button>
          <TwitterLink quotes={props.quotes} number={props.number} />
        </div>
      </div>
    </div>
  );
};

export default QuoteLayout;
