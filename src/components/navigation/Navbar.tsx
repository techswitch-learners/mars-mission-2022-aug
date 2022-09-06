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
          <li>Explore Mars</li>
          <li>Fun Facts</li>
          <li>Test Your Knowledge</li>
        </ul>
    </div>
  </nav>;
};
