import React, { Component } from "react";
import "./fetch.css";
class DataDisplay extends Component {
  state = { data: [], error: "" };
  render() {
    const { data, error } = this.state;
    if (data.length !== 0) {
      let keys = Object.keys(data[0]);
      return error ? (
        error
      ) : (
        <div className="table">
          <div className="table-header">
            {keys.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
          <div className="body-container">
            {data.map((ditem) => (
              <div key={ditem.id} className="table-body">
                <span>{ditem.id}</span>
                <span>{ditem.name}</span>
                <span>{ditem.username}</span>
                <span>{ditem.email}</span>
                <span>{ditem.address.street}</span>
                <span>{ditem.phone}</span>
                <span>{ditem.website}</span>
                <span>{ditem.company.name}</span>
              </div>
            ))}
            <hr />
          </div>
        </div>
      );
    }
    return <div></div>;
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((e) => e.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }
}

export default DataDisplay;
