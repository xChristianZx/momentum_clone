import React from "react";

const LinkItem = props => {
  const linkList = props.links.map(link => (
    <li className="links-list-item" key={link.id}>
      <a href={link.url} target="_blank">
        <p>{link.name}</p>
      </a>
      <button type="submit" onClick={props.deleteItem.bind(this, link.id)}>
        x
      </button>
    </li>
  ));
  return <ul className="links-list">{linkList}</ul>;
};

export default LinkItem;
