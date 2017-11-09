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

  componentDidMount() {
    const localKeys = Object.keys(localStorage).filter(key =>
      key.includes("todo-item")
    );
    const restoredLocal = localKeys.map(item => {
      return JSON.parse(localStorage.getItem(item));
    });
    this.setState({ list: restoredLocal });
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    let newItem = { item: this.state.item, id: Date.now() };

    /* Set to localStorage */
    const stringifyNewItem = JSON.stringify(newItem);
    localStorage.setItem(`todo-item-${newItem.id}`, stringifyNewItem);

    /* Get localStorage and set to State */
    const localKeys = Object.keys(localStorage).filter(key =>
      key.includes("todo-item")
    );
    const restoredLocal = localKeys.map(item => {
      return JSON.parse(localStorage.getItem(item));
    });

    this.setState({
      list: restoredLocal,
      item: ""
    });
    e.preventDefault();
  };

  deleteItem = id => {
    localStorage.removeItem(`todo-item-${id}`);
    this.setState((prevState, { list }) => ({
      list: prevState.list.filter(item => item.id !== id)
    }));
  };

  activeHandler = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    console.log("list: ", this.state.list);
    // console.log(this.state.active);
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
        <div className="todo-click-label">
          <span onClick={this.activeHandler}>To Do</span>
        </div>
      </div>
    );
  }
}

export default ToDoList;
