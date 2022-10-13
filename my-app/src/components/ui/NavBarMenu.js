import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #ffffff;
  color: black;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 25%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  color: #241f1f;
  font-size: 17px;
  font-weight: 500;
  align-items: center;
  text-decoration: none;
  padding: 0.625rem 1rem;
  height: 94%;
  cursor: pointer;

  &.active {
    color: #7a4241;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 22px;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const Profile = styled.img`
  margin: 20px 0px 20px 0px;
  max-width: 35px;
  height: auto;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    margin: 20px 0px 20px 0px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 80px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #120611;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #d8a7a7;
  padding: 10px 19px 10px 20px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  border-radius: 23px;
  /* border: solid #C4C4C4 2px; */
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000000;
    color: #ffffff;
  }
`;

export const NavBtnHam = styled.nav`
  display: flex;
  display: contents;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLinkHam = styled(Link)`
  border-radius: 4px;
  padding: 10px 19px 10px 20px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
`;
// export const Nav = styled.nav`
//   background: #ffffff;
//   height: 55px;
//   display: flex;
//   justify-content: space-between;
//   padding: 3rem;
//   /* z-index: 10; */
// `;

// export const NavLink = styled(Link)`
//   color: #241f1f;
//   display: flex;
//   font-size: 17px;
//   font-weight: 500;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 94%;
//   cursor: pointer;

//   &.active {
//     color: #7a4241;
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #241f1f;

//   @media screen and (max-width: 768px) {
//     display: flex;
//     position: absolute;
//     top: 12px;
//     right: 12px;
//     transform: translate(-100%, 75%);
//     font-size: 2rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 4px;
//   cursor: pointer;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #d8a7a7;
//   padding: 10px 19px 10px 20px;
//   color: #ffffff;
//   font-size: 16px;
//   font-weight: 500;
//   border-radius: 23px;
//   /* border: solid #C4C4C4 2px; */
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #000000;
//     color: #ffffff;
//   }
// `;
