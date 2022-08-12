import React from "react";
import "./Recommended.scss";
import SalonData from "../../data/Salon-data.json";
import star from "../../assets/star.png";

export const Recommended = () => {
  return (
    <div>
      <div className="title">Recommended</div>
      <hr className="Line2"></hr>
      <div className="Recommended-container">
        {SalonData &&
          SalonData.map((Recommendation) => {
            return (
              <a href="#" className="Card" key={Recommendation.id}>
                <img
                  className="Card_image"
                  src={Recommendation["Salon-image"]}
                  alt="/"
                />
                <br />
                <div className="Card_title">{Recommendation["Salon-name"]}</div>
                <div className="Card_loc">{Recommendation.location}</div>
                <div className="Rating">
                  <img src={star} className="Star" />
                  <div className="Card_rating">{Recommendation.Ratings}</div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};
