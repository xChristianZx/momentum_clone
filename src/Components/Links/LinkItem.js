import React from "react";

const LinkItem = props => {
  const linkList = props.links.map(link => (
    <li key={link.id}>
      <a href={link.url} target="_blank">
        <p>{link.name}</p>
      </a>
      <button type='submit' onClick={props.deleteItem.bind(this, link.id)} />
    </li>
  ));
  return linkList;
};

export default LinkItem;
