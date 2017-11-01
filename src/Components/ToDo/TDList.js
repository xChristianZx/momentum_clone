import React from "react";

const TDList = props => {
  const listItems = props.list.map(item => {
    return (
      <li className="todo-list-item" key={item.id}>
        <span>
          <input type="checkbox" name="complete" />
          {item.item}
        </span>
        <button type="submit" onClick={props.deleteItem.bind(this, item.id)}>
          x
        </button>
      </li>
    );
  });
  return <ul className="todo-list">{listItems}</ul>;
};

export default TDList;
