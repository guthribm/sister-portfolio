import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/sister-portfolio">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
