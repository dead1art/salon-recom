import React from "react";
import logo from "../assets/Logo.svg";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./ui/NavBarMenu";

export const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/" activestyle="true">
          Home
        </NavLink>
        <NavLink to="/Gallery" activestyle="true">
          Gallery
        </NavLink>
        <NavLink to="/About" activestyle="true">
          About
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/Login-SignUp">Login/Sign Up</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
