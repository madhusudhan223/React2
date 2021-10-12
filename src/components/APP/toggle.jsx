import React, { Component } from "react";
import { userConsumer } from "./context";
class Toggle extends Component {
  state = { isToggle: true };
  handleClick = () => {
    this.setState({ isToggle: !this.state.isToggle });
  };
  render() {
    <userConsumer>
      {(p) => {
        console.log(p);
        return null;
      }}
    </userConsumer>;
    return (
      <div>
        <button style={{ backgroundColor: "blue" }} onClick={this.handleClick}>
          {this.state.isToggle ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default Toggle;
