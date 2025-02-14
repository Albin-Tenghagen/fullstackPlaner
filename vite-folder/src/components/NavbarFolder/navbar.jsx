import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigationMenu">
      <NavLink to="/" className="NavLink">
        Home
      </NavLink>
      <NavLink to="/details" className="NavLink">
        Details
      </NavLink>
      <NavLink to="/weather" className="NavLink">
        Weather
      </NavLink>
    </nav>
  );
};

export default Navbar;
