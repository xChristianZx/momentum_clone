import React, { Component } from "react";
import "./ToDo.css";
import AddItem from "./AddItem";
import TDList from "./TDList";
import classNames from "classnames";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
      active: false
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

  activeHandler = () => {
    if (this.state.active === false) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  render() {
    console.log("list: ", this.state.list);
    console.log(this.state.active);
    let activeToDoList = classNames({
      "todo-list-container": true,
      active: this.state.active
    });
    return (
      <div className="todo-container">
        <div className={activeToDoList}>
          <TDList list={this.state.list} deleteItem={this.deleteItem} />
          <AddItem
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="todo-click-label" onClick={this.activeHandler}>
          To Do
        </div>
      </div>
    );
  }
}

export default ToDoList;
