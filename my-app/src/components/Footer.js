import React from "react";

import "../components/Footer.scss";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import reddit from "../assets/reddit.png";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__heading">Join us On</div>
        <div className="footer__Socials">
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="/" className="Instagram" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="/" className="Facebook" />
          </a>
          <a href="https://twitter.com/">
            <img src={twitter} alt="/" className="Twitter" />
          </a>
          <a href="https://www.reddit.com/">
            <img src={reddit} alt="/" className="Reddit" />
          </a>
        </div>
        <div className="footer_Copyright">Copyright © 2022</div>
      </div>
    </footer>
  );
};
export default Footer;
