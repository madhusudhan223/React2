import React, { Component } from "react";
import Greeting from "./conditionalRendering";
function LoggedOut(props) {
  return (
    <div>
      <button onClick={props.onClick}>LogOut</button>
    </div>
  );
}
function LoggedIn(props) {
  return (
    <div>
      <button onClick={props.onClick}>LogIn</button>
    </div>
  );
}

class LoginControl extends Component {
  state = { isLoggedIn: false };
  handleLogOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  handleLogIn = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LoggedOut onClick={this.handleLogOut} />;
    } else {
      button = <LoggedIn onClick={this.handleLogIn} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
