import React, { Component } from "react";
import { url } from "inspector";

export default class TodoList extends Component {
  state = {
    todos: []
  };

  render() {
    return (
      <ul>
        {this.state.todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    );
  }
}
