import React from "react";
import FaTwitter from "react-icons/lib/fa/twitter";

const Twitter = props => {
  const quote = props.quotes[props.number].quote;
  const author = props.quotes[props.number].author;
  const currentQuote = `${quote} ~ ${author}`;

  const createTweet = (quotes, author) => {
    window.open(
      "https://twitter.com/intent/tweet?&text=" +
        encodeURIComponent(currentQuote)
    );
  };

  return (
    <span className="twitter-button" onClick={createTweet}>
      <FaTwitter className="twitter-icon" />
    </span>
  );
};

export default Twitter;
