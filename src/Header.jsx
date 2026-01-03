import react from "react";
import AddToCart from "./AddtoCart.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyStore</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;
