import React, { useState, useEffect } from "react";
import "./Page.scss";
import star from "../../assets/star.png";
import mainData from "../../data/main-data.json";
import axios from "axios";

const Page = () => {
  return (
    <div>
      <div className="page-container">
        <img
          className="page-images"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg"
          alt="/"
        ></img>
        <div className="page-details">
          <div className="page-title">Decadence Hair and Beauty</div>
          <div className="page-location">
            6 N Court St, 1A, Westminster,Md, 21157
          </div>
          <div className="page-rating">
            <img src={star} className="page-star" />
            <div className="page-ratings">4.8</div>
          </div>
          <button className="book-now">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
