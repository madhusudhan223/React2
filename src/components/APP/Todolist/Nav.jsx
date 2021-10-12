import React, { Component } from "react";
import Table from "./table";
import "./Nav.css";
class Nav extends React.Component {
  state = { table: "" };
  displayTable = (str) => {
    this.setState({ table: str });
  };
  render() {
    const { table } = this.state;
    return (
      <div>
        <div className="container">
          <div onClick={() => this.displayTable("table1")}>Table1</div>
          <div onClick={() => this.displayTable("table2")}>Table2</div>
        </div>
        <div>
          {" "}
          {table === "table1" ? (
            <Table api={"https://fakestoreapi.com/products"} />
          ) : null}
          {table === "table2" ? (
            <Table api={"https://jsonplaceholder.typicode.com/users"} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Nav;
