import React, { useState, useEffect } from "react";
import "../../pages/Gallery/Gallery.scss";
import star from "../../assets/star.png";
import Page from "../../pages/singlePage/Page";
import { Link } from "react-router-dom";
import axios from "axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const res = await axios.get(
        `https://salon-api-back.herokuapp.com/api/salons/?name=${query}`
      );
      setData(res.data);
    };
    if (query.length === 0 || query.length > 1) fetchData();
    setloading(false);
  }, [query]);

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    setloading(true);
    const response = await axios.get(
      "https://salon-api-back.herokuapp.com/api/salons/"
    );
    if (response.status === 200) {
      setloading(false);
      setData(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  console.log("data", data);
  return (
    <>
      {loading ? (
        <div className="BarLoader">
          <ClimbingBoxLoader color="#000000" />
        </div>
      ) : (
        <div>
          <div className="searchBar">
            <input
              type="text"
              className="Search"
              placeholder="All Categories"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            ></input>
            <button className="searchButt">Search</button>
          </div>

          <div className="Gallery-container">
            {data &&
              data.map((item, id) => (
                <Link className="Card" to={`/Page/${item.id}`}>
                  <img className="Card_image" src={item.salonImage} alt="/" />
                  <br />
                  <div className="Card_title">{item.name}</div>
                  <div className="Card_loc">{item.address}</div>
                  <div className="Rating">
                    <img src={star} className="Star" />
                    <div className="Card_rating">{item.ratings}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Gallery;
