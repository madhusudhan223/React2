import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
//import App from "./components/APP/";
//import "font-awesome/css/font-awesome.css";
//import App from "./components/APP/App";
//import Todo from "./components/APP/Todolist/App";
//import Hooks from "./components/APP/hooks";
//import Hooks1 from "./components/APP/hooks1";
// import DataDisplay from "./components/APP/fetch";
// import Toggle from "./components/APP/toggle";
// import LoginControl from "./components/APP/loginControl";
//import Movies from "./components/APP/movies";
//import { BrowserRouter } from "react-router-dom";
//import DemoContext from "./components/APP/demoContext";
// import Greeting from "./components/APP/conditionalRendering";
// import MailBox from "./components/APP/mailBox";
// import Page from "./components/APP/page";
// let messages = ["hai", "hello", "how r u"];
//import App from "./components/APP/routingApp/App";
import App from "./Redux/App";
import Practice from "./components/APP/Todolist/prac";

//import TodoList from "./components/APP/Todolist/TodoList";
import { createStore } from "redux";
import allReducers from "./Redux/combinedReducer";
import Counter from "./Redux/counterReducer";
import CounterContainer from "./Redux/App";
import { Provider } from "react-redux";
// import Table from "./components/APP/Todolist/table";
import DataDisplay from "./components/APP/fetch";
//

//import Nav from "./components/APP/Todolist/Nav";
const store = createStore(
  allReducers

  // sets initial state
  // makes debugging through Redux Dev Tools possible
);
ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <Practice />,
  // <Practice />,
  // <DataDisplay />,
  document.getElementById("root")
);
