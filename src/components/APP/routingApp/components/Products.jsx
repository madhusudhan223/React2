import React from "react";
import { Link } from "react-router-dom";
const Producttt = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" }
];

const Product = () => {
  return (
    <div className="Product">
      Product!!
      <ul>
        {Producttt.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
