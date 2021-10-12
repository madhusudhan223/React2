import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to="/admin">admin</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
