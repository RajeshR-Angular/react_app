import React from "react";
import { Link } from "react-router-dom";
// scss
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
