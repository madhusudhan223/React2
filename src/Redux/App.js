import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
// import { increment } from "./actions";
function App(props) {
  return (
    <>
      <button onClick={() => props.increment(5)}>+</button>
      <span>{props.value.counter}</span>
      <button onClick={() => props.decrement(5)}>-</button>
    </>
  );
}
const mapStateToProps = (state) => {
  return { value: state };
};

export default connect(mapStateToProps, { increment, decrement })(App);
