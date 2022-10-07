import React, { useState, useEffect } from "react";
import "./Recommended.scss";
import star from "../../assets/star.png";
import Page from "../singlePage/Page";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className="Recommended-container">
        {data &&
          data.map((item, id) => (
            <Link to={`/Page/${item.id}`} className="recomCard">
              <img className="cardImage" src={item.SalonImage} alt="/" />
              <br />
              <div className="cardTitle">{item.SalonName}</div>
              <div className="cardLoc">{item.location}</div>
              <div className="cardRating">
                <img src={star} className="cardStar" />
                <div className="recomRating">{item.Ratings}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
