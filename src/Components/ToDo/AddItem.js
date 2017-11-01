import React from "react";

const AddItem = props => {
  return (
    <div className="add-item-container">
      <form onSubmit={props.handleSubmit}>
        <input
          className="add-item-input"
          type="text"
          onChange={props.handleChange}
          placeholder={"Add ToDo"}
          value={props.item}
        />
      </form>
    </div>
  );
};

export default AddItem;
