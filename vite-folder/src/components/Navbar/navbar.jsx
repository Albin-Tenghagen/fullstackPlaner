import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/details">Details</NavLink>
      <NavLink to="/weather">Weather</NavLink>
    </nav>
  );
};

export default Navbar;
