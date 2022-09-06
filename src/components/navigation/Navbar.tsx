import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar: React.FunctionComponent = () => {
  return <nav>

    <div className="emptySpacingBox"></div>

    <div id="menuToggle">
      <input type="checkbox" />
      
        <span></span>
        <span></span>
        <span></span>
      
        <ul id="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rovers">Explore Mars</Link></li>
          <li><li><Link to="/fun-facts">Fun Facts</Link></li></li>
          <li><Link to="/quiz">Test Your Knowledge</Link></li>
        </ul>
    </div>
  </nav>;
};
