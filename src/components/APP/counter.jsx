import React, { Component } from "react";
import { UserConsumer, UserContext } from "./context";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // imageUrl: "https://picsum.photos/200",
  //   // tags: [],
  // };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  // renderTag() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  // }
  // handleIncrement(e) {
  //   console.log(e);
  //   this.setState({ value: this.state.value + 1 });
  // }
  // constructor(props) {
  //   super(props);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  //static contextType = UserContext;
  render() {
    //console.log(this.context);

    return (
      <UserConsumer>
        {(value) => {
          return (
            <div className="row">
              <div className="col-1">
                <span
                  style={{ fontSize: 10 }}
                  className={this.getBadgeClasses()}
                >
                  {this.formatCount()}
                </span>
              </div>
              <div className="col">
                <button
                  onClick={() => {
                    this.props.onIncrement(this.props.counter);
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    value.decrement(this.props.counter);
                  }}
                  className="btn btn-secondary btn-sm m-2"
                  disabled={this.props.counter.value === 0 ? "disabled" : ""}
                >
                  -
                </button>
                <button
                  className="btn btn-danger btn-sm "
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                  Delete
                </button>
              </div>

              {/* <img src={this.state.imageUrl} alt="" /> */}
              {/* {this.props.children} */}
              {/* <h4>counter #{this.props.counter.id}</h4> */}
              {/* <ul>
          {this.state.tags.length === 0 && "please create new tag"}
          {this.renderTag()}
        </ul> */}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
