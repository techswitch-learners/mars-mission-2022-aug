import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from 'react'

export const Navbar: React.FunctionComponent = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  function toggleMenu(){
    setIsExpanded(current => !current)
  }

  return <nav>

    <div className="navbar">
      <button onClick = {() => toggleMenu()}>
      
        <span className = {`navbar__spanone ${isExpanded ? "burgerexpanded" : "burgercollapsed"}`}></span>
        <span className = {`navbar__spantwo ${isExpanded ? "burgerexpanded" : "burgercollapsed"}`}></span>
        <span className = {`navbar__spanthree ${isExpanded ? "burgerexpanded" : "burgercollapsed"}`}></span>

      </button>
      
      <ul className = {`navbar__nav-links ${isExpanded ? "expanded" : "collapsed"}`}>
        <li onClick = {() => toggleMenu()}><Link to="/">Home</Link></li>
        <li onClick = {() => toggleMenu()}><Link to="/rovers">Explore Mars</Link></li>
        <li onClick = {() => toggleMenu()}><Link to="/fun-facts">Fun Facts</Link></li>
        <li onClick = {() => toggleMenu()}><Link to="/quiz">Test Your Knowledge</Link></li>
      </ul>
    </div>
  </nav>;
};
