import React, { Component } from "react";
import "./table.css";
class Table extends React.Component {
  state = { data: [] };
  componentDidMount() {
    fetch(this.props.api)
      .then((e) => e.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }
  render() {
    const { data } = this.state;
    let keys;
    if (data.length !== 0) {
      keys = Object.keys(data[0]);
      console.log(keys);
      return (
        <div>
          <div className="table">
            <div className="tableheader">
              <div>{keys[0]}</div>
              <div>{keys[1]}</div>
              <div>{keys[2]}</div>
              <div>{keys[3]}</div>
              <div>{keys[6]}</div>
            </div>
            <div>
              {data.map((i) => (
                <div className="tablebody" key={i.id}>
                  <div>{i[keys[0]]}</div>
                  <div>{i[keys[1]]}</div>
                  <div>{i[keys[2]]}</div>
                  <div>{i[keys[3]]}</div>
                  <div>
                    <img
                      src={i[keys[5]]}
                      alt=""
                      style={{ width: 75, height: 75 }}
                    />
                  </div>
                  <div>{i[keys[3]]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Table;
