import React from "react";
// scss
import "./homepage.styles.scss";

// data
import Directory from "../../components/directory/directory.component";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
