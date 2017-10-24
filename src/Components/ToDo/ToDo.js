import React, { Component } from "react";
import AddItem from "./AddItem";
import List from './TDList';

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
      <div>
        <List list={this.state.list} deleteItem={this.deleteItem}/>
        <AddItem
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ToDoList;
