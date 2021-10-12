import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Products from "./components/Products";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Dashboard from "./components/admin/dashboard";
// import ProductDetails from "./components/productDetails";
// import NotFound from "./components/notFound";
//import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
