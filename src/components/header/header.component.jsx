import React from "react";
import { Link } from "react-router-dom";
// scss
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;