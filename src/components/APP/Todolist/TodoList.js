import React, { Component } from "react";
import TodoForm from "./todoform";
import Todo from "./Todo";
import "./todo.css";

class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
  };
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  updateTodoShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };
  onDelete = (i) => {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== i),
    });
  };
  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            toggleComplete={() => this.toggleComplete(todo.id)}
            key={todo.id}
            todo={todo}
            onDelete={() => this.onDelete(todo.id)}
          />
        ))}
        <div>
          todos left:{this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <button onClick={() => this.updateTodoShow("all")}>all</button>
        <button onClick={() => this.updateTodoShow("active")}>active</button>
        <button onClick={() => this.updateTodoShow("complete")}>
          complete
        </button>
      </div>
    );
  }
}

export default TodoList;
