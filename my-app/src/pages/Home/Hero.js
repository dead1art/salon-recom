import React from "react";

import "./Hero.scss";
import "../../../src/mixins.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Get ready for any occasion</h1>
      <div className="image"></div>
      <input
        type="text"
        className="Location-Input"
        placeholder="Salon, Name, Spa and City"
      ></input>
      <button className="button_1">Let's go</button>
    </div>
  );
};
