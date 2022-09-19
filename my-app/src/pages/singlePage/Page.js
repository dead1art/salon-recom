import React, { useState, useEffect } from "react";
import "./Page.scss";
import star from "../../assets/star.png";
import mainData from "../../data/main-data.json";
import Review from "../singlePage/Review";
import axios from "axios";
import map from "../../assets/map.png";
import clock from "../../assets/clock.png";
import angle_up from "../../assets/angle_up.png";

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
            <div className="page-ratings">4.8 Great</div>
          </div>
          <button className="book-now">Book now</button>
        </div>
      </div>

      <div className="Info-container">
        <div className="Info">
          <div className="Info-title">About Decadence Hair and Beauty</div>
          <p className="Info-detail">
            Decadence Hair and Beauty is an exclusive boutique salon in the
            heart of Bloomsbury providing a warm, welcoming and pampering
            retreat from the noise of the city. We have the most experienced and
            friendly team of hairstylists, colourists, beauty therapists and
            front of house staff who are proud to bring you our personalised
            five-star service. You will feel fabulous from the moment you walk
            through the door.
          </p>
        </div>
        <div className="Info-location">
          <div className="InfoLoc-title">Location</div>
          <div className="InfoLoc-cont">
            <div className="InfoLoc-cont2">
              <p className="InfoLoc-address">
                6 N Court St, 1A, Westminster,Md, 21157
              </p>
              <a href="#" className="See-Direct">
                See Directions
              </a>
            </div>
            <img className="Info-icon" src={map} alt="/" />
          </div>

          <hr className="Divide" />
          <div className="Timings">
            <img className="Time-icon" src={clock} alt="#" />
            <p className="Open-now">
              Open now
              <span className="Time">9:00am - 8:00pm</span>
              <span>
                <img className="Time-accordin" src={angle_up} alt="/"></img>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default Page;
