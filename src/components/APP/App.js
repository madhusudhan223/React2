import React, { Component } from "react";
import NavBar from "./nav";
import Counters from "./counters";

import { UserProvider } from "./context";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((i) => id !== i.id),
    });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleReset = () => {
    let count = this.state.counters.map((i) => {
      i.value = 0;
      return i;
    });
    this.setState({ counters: count });
  };
  render() {
    return (
      <UserProvider value={{ decrement: this.handleDecrement }}>
        <React.Fragment>
          <NavBar
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          />
          ;
          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
          </main>
        </React.Fragment>
      </UserProvider>
    );
  }
}

export default App;
