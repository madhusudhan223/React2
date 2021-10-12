import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { counters, onIncrement, onDelete, onReset, onDecrement } =
      this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((i) => (
          <Counter
            key={i.id}
            counter={i}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            {/* <h4>counter #{i.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
