import React from "react";
// scss
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size ? "large" : ""}`}>
      <img src={imageUrl} title={title} alt="menu" />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
