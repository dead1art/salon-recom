import React, { useState, useEffect } from "react";
import "./Recommended.scss";
import star from "../../assets/star.png";
import Page from "../singlePage/Page";
import axios from "axios";

export const Recommended = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    const response = await axios.get(
      "http://localhost:3006/mainData?_start=0&_end=8"
    );
    if (response.status === 200) {
      setData(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  console.log("data", data);

  return (
    <div className="background">
      <div className="title">Recommended</div>
      {/* <hr className="Line2"></hr> */}
      <div className="Recommended-container">
        {data &&
          data.map((item, id) => (
            <a href="Page" className="recomCard" key={id}>
              <img className="cardImage" src={item.SalonImage} alt="/" />
              <br />
              <div className="cardTitle">{item.SalonName}</div>
              <div className="cardLoc">{item.location}</div>
              <div className="cardRating">
                <img src={star} className="cardStar" />
                <div className="recomRating">{item.Ratings}</div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};
