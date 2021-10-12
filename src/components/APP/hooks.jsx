import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(4);
  function onIncrement() {
    setCount(count + 1);
  }
  function onDecrement() {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={onDecrement} disabled={count === 0 ? "disable" : ""}>
        -
      </button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </>
  );
}
