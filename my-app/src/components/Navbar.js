import React, { useState } from "react";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  NavBtnLink,
  NavBtn,
  NavBtnHam,
  NavBtnLinkHam,
  Profile,
} from "../components/ui/NavBarMenu";
import logo from "../assets/Logo.svg";
import profile from "../assets/profile.png";

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <Logo src={logo}></Logo>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLink to="/"> Home</NavbarLink>
          <NavbarLink to="/Gallery"> Gallery</NavbarLink>
          <NavbarLink to="/about"> About Us</NavbarLink>
          <NavBtn>
            <NavBtnLink to="/Login-SignUp">Login/Sign Up</NavBtnLink>
          </NavBtn>
          <Profile src={profile}></Profile>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home </NavbarLinkExtended>
          <NavbarLinkExtended to="/Gallery"> Gallery </NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About Us </NavbarLinkExtended>
          <NavBtnHam>
            <NavBtnLinkHam to="/Login-SignUp">Login/Sign Up</NavBtnLinkHam>
          </NavBtnHam>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
