import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/project/">Project</Link>
      <Link to="/login/">Log In</Link>
    </nav>
  );
}

export default Nav;
