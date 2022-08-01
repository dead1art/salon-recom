import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarMenu'

export const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
      <img src='/images/logo.svg' alt='Logo'/>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/Home" activestyle="true">
          Home
        </NavLink>
        <NavLink to="/DailyDeals" activestyle="true">
          Daily Deals
        </NavLink>
        <NavLink to="/Gallery" activestyle="true">
          Gallery
        </NavLink>
        <NavLink to="/About" activestyle="true">
          About
          </NavLink>
      </NavMenu>
      <NavBtn>
      <NavBtnLink to="/Login-SignUp">
          Login/Sign Up
        </NavBtnLink>
      </NavBtn>
        
    </Nav>
  )
}

export default Navbar