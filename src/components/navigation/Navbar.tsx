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
      <button onClick = {() => toggleMenu() } className = {`${isExpanded ? "navbar__button--expanded": ""}`}>
        <span className = {`navbar__span-one ${isExpanded ? "navbar__burger--expanded" : ""}`}></span>
        <span className = {`navbar__span-two ${isExpanded ? "navbar__burger--expanded" : ""}`}></span>
        <span className = {`navbar__span-three ${isExpanded ? "navbar__burger--expanded" : ""}`}></span>
      </button>
      <ul className = {`navbar__nav-links ${isExpanded ? "navbar__nav-links--expanded" : ""}`}>
        <li onClick = {() => toggleMenu()}><Link to="/">Home</Link></li>
        <li onClick = {() => toggleMenu()}><Link to="/rovers">Explore Mars</Link></li>
        <li onClick = {() => toggleMenu()}><Link to="/fun-facts">Fun Facts</Link></li>
        <li onClick = {() => toggleMenu()}><Link to="/quiz">Test Your Knowledge</Link></li>
        <li onClick = {() => toggleMenu()}><Link to="/photo-gallery">Photo Gallery</Link></li>
      </ul>
    </div>
  </nav>;
};
