import React, { Component } from "react";
class Practice extends Component {
  state = { data: [], count: 0, addtocart: [], display: false };
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((e) => e.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }
  displayCart = () => {
    this.setState({ display: !this.state.display });
  };
  AddtoCart = (i) => {
    const { count, addtocart } = this.state;
    const itemcount = addtocart.filter((item) => item.id === i.id);
    this.setState({ itemcount });
    if (itemcount.length > 4) {
      alert("maximum 5 items can be selected");
    } else {
      this.setState({ count: count + 1 });
      addtocart.push(i);
      this.setState({ addtocart });
    }
  };
  removeCart = (i) => {
    const { count, addtocart } = this.state;
    const index = addtocart.findIndex((item) => item.id === i.id);
    if (index !== -1) {
      this.setState({ count: count - 1 });
      addtocart.splice(index, 1);
      this.setState({ addtocart });
    }
  };

  render() {
    console.log(this.state.addtocart);
    const { data, count, addtocart, display } = this.state;
    return (
      <div>
        <div>{JSON.stringify(data[0])}</div>
        <i
          className="fa fa-shopping-cart"
          aria-hidden="true"
          style={{ fontSize: 40 }}
          onClick={this.displayCart}
        >
          <span className="badge">{count}</span>
        </i>
        {display
          ? addtocart.map((i) => (
              <div key={i.id}>
                <div>{i.title}</div>
                <div>{i.price}</div>
                <img src={i.image} alt="" style={{ width: 75, height: 75 }} />
              </div>
            ))
          : null}

        <div>Task</div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>category</th>
              <th>image</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.price}</td>
                <td>{i.description}</td>
                <td>{i.category}</td>
                <td>
                  <img src={i.image} alt="" style={{ width: 75, height: 75 }} />
                </td>
                <td>{i.rating.rate}</td>
                <td>
                  <button
                    id={i.id}
                    className="btn btn-primary"
                    onClick={() => this.AddtoCart(i)}
                  >
                    Addtocart
                  </button>
                </td>
                <td>
                  <button
                    id={i.id}
                    className="btn btn-primary"
                    onClick={() => this.removeCart(i)}
                    disabled={count === 0 ? "disabled" : ""}
                  >
                    RemoveFromCart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Practice;
