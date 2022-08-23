import React, { useState, useEffect } from "react";
import "../../pages/Gallery/Gallery.scss";
import star from "../../assets/star.png";
// import Page from "../singlePage/Page";
import axios from "axios";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    const response = await axios.get("http://localhost:3006/mainData");
    if (response.status === 200) {
      setData(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  console.log("data", data);
  return (
    <div>
      <input
        type="text"
        className="Search"
        placeholder="All Categories"
      ></input>
      <button className="button_2">Go</button>
      <div className="Gallery-container">
        {data &&
          data.map((item, id) => (
            <a href="#" className="Card" key={id}>
              <img className="Card_image" src={item.SalonImage} alt="/" />
              <br />
              <div className="Card_title">{item.SalonName}</div>
              <div className="Card_loc">{item.location}</div>
              <div className="Rating">
                <img src={star} className="Star" />
                <div className="Card_rating">{item.Ratings}</div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};
export default Gallery;
