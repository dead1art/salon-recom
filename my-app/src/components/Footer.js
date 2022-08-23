import React from "react";
import "../components/Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__heading">Join us On</div>
        <div className="footer__Socials">
          <a href="https://www.instagram.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="/"
              className="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
              alt="/"
              className="Facebook"
            />
          </a>
          <a href="https://twitter.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              alt="/"
              className="Twitter"
            />
          </a>
          <a href="https://www.reddit.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1409/1409938.png"
              alt="/"
              className="Reddit"
            />
          </a>
        </div>
        <div className="footer_Copyright">Copyright © 2022</div>
      </div>
    </footer>
  );
};
export default Footer;
