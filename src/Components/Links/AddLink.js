import React from "react";

const AddLink = props => {
  return (
    <div className="add-link-container">
      <form onSubmit={props.handleSubmit}>
        <input
          className="add-link-input"
          name="name"
          type="text"
          placeholder="Name"
          value={props.name}
          onChange={props.handleChange}
        />
        <input
          className="add-link-input"
          name="url"
          type="text"
          placeholder="URL"
          value={props.url}
          onChange={props.handleChange}
        />
        <input className="add-link-input-button" type="submit" value="+" />
      </form>
    </div>
  );
};

export default AddLink;
