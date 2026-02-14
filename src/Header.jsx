import React from "react";
import AddToCart from "./AddtoCart.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyStore</div>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;
