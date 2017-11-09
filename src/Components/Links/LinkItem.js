import React from "react";

const LinkItem = props => {
  
  const httpsCheck = (link) => {
    if (!link.includes("http") || !link.includes("https")) {
      return `https://${link}`;
    }
    return link;
  };

  const linkList = props.links.map(link => (
    <li className="links-list-item" key={link.id}>
      <a href={httpsCheck(link.url)} target="_blank">
        <span>{link.name}</span>
      </a>
      <button
        className="list-item-delete-button"
        type="submit"
        onClick={props.deleteItem.bind(this, link.id)}
      >
        x
      </button>
    </li>
  ));
  return <ul className="links-list">{linkList}</ul>;
};

export default LinkItem;
