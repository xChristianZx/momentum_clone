import React from "react";

const List = props => {
  const listItems = props.list.map(item => {
    return (
      <li key={item.id}>
        {item.item}
        <button type="submit" onClick={props.deleteItem.bind(this, item.id)} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
};

export default List;
