import React from "react";

const AddItem = props => {
  return (
    <li>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.item} onChange={props.handleChange} />
      </form>
    </li>
  );
};

export default AddItem;
