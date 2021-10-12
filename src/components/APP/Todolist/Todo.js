import React, { Component } from "react";
import "./todo.css";
const Todo = (props) => {
  return (
    <div className="todo-item">
      <div
        onClick={props.toggleComplete}
        style={{
          textDecoration: props.todo.complete ? "line-through" : "",
          cursor: "pointer",
        }}
      >
        {props.todo.text}
      </div>
      <button onClick={props.onDelete}>x</button>
    </div>
  );
};

export default Todo;
