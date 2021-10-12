import React, { Component } from "react";
import { Link } from "react-router-dom";

// const ProductDetails = (props.match.param.id) => {
//   return <div className="ProductDetails">ProductDetails!! {props.match.param.id}</div>;
// };
class ProductDetails extends Component {
  render() {
    return (
      <div className="ProductDetails">
        ProductDetails!! {this.props.match.params.id}
      </div>
    );
  }
}

export default ProductDetails;
