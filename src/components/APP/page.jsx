import React, { Component } from "react";
import Warning from "./warning";
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true,
    };
  }
  handleClick = () => {
    this.setState({ showWarning: !this.state.showWarning });
  };

  render() {
    return (
      <div>
        <Warning warn={this.state.showWarning} />
        <button style={{ width: 100 }} onClick={this.handleClick}>
          {this.state.showWarning ? "hide" : "show"}
        </button>
      </div>
    );
  }
}
export default Page;
