import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/rovers">Rovers</Link></li>
    </ul>
  </nav>;
};
