import React, { Component } from "react";
import "./ToDo.css";
import AddItem from "./AddItem";
import TDList from "./TDList";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    };
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    let newItem = { item: this.state.item, id: Date.now() };
    this.setState((prevState, { list }) => ({
      list: prevState.list.concat(newItem),
      item: ""
    }));
    e.preventDefault();
  };

  deleteItem = id => {
    this.setState((prevState, { list }) => ({
      list: prevState.list.filter(item => item.id !== id)
    }));
  };

  render() {
    console.log("list: ", this.state.list);
    return (
      <div className="todo-container">
        <div className="active">
          <TDList list={this.state.list} deleteItem={this.deleteItem} />
          <AddItem
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div
          className="todo-click-label"
          onClick={() => console.log("WEEEEhAAAAA")}          
        >
          To Do
        </div>
      </div>
    );
  }
}

export default ToDoList;
