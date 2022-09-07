import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from 'react'

export const Navbar: React.FunctionComponent = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  function toggleMenu(){
    setIsExpanded(current => !current)
    console.log(isExpanded)
  }

  return <nav>

    <div className="emptySpacingBox"></div>

    <div id="menuToggle">
      <button onClick = {() => toggleMenu()}>
      
        <span ></span>
        <span></span>
        <span></span>

      </button>
      
        <ul className = {`menu ${isExpanded ? "expanded" : "collapsed"}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rovers">Explore Mars</Link></li>
          <li><Link to="/fun-facts">Fun Facts</Link></li>
          <li><Link to="/quiz">Test Your Knowledge</Link></li>
        </ul>
    </div>
  </nav>;
};
