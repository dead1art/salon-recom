import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import axios from "axios";

import "./Page.scss";
import star from "../../assets/star.png";
import { Review } from "../singlePage/Review";

import map from "../../assets/map.png";
import clock from "../../assets/clock.png";
import angle_up from "../../assets/angle_up.png";

export const Page = () => {
  const [pagedata, setpageData] = useState([]);
  const [loading, setloading] = useState(false);
  const id = useParams();

  useEffect(() => {
    const getDetail = async (id) => {
      console.log(id.id);
      setloading(true);
      const response = await axios.get(
        `https://salon-api-back.herokuapp.com/api/salons/id/?id=${id.id}`
      );
      setloading(false);
      console.log(response.data);
      setpageData(response.data);
    };
    getDetail(id);
  }, []);

  // pagedata.map((item) => {
  //   console.log(item.name);
  //   console.log(item.description);
  // });

  console.log(pagedata);

  return (
    <>
      {loading ? (
        <div className="BarLoader">
          <ClimbingBoxLoader color="#000000" />
        </div>
      ) : (
        <div>
          <div className="page-container">
            <img className="page-images" src={pagedata.salonImage} alt="/" />
            <div className="page-details">
              <div className="page-title">{pagedata.name}</div>
              <div className="page-location">{pagedata.address}</div>
              <div className="page-rating">
                <img src={star} className="page-star" />
                <div className="page-ratings">{pagedata.ratings} Great</div>
              </div>
              <Link to={`/BookNow`}>
                <button className="book-now">Book now</button>
              </Link>
            </div>
          </div>

          <div className="Info-container">
            <div className="Info">
              <div className="Info-title">{pagedata.name}</div>
              <p className="Info-detail">{pagedata.description}</p>
            </div>
            <div className="Info-location">
              <div className="InfoLoc-title">Location</div>
              <div className="InfoLoc-cont">
                <div className="InfoLoc-cont2">
                  <p className="InfoLoc-address">{pagedata.address}</p>
                  <a href="#" className="See-Direct">
                    See Directions
                  </a>
                </div>
                <img className="Info-icon" src={map} alt="/" />
              </div>

              <hr className="Divide" />
              <div className="Timings">
                <img className="Time-icon" src={clock} alt="Clock" />
                <div className="Open-now">
                  <div className="Bus-Hour">Business Hours</div>

                  <div className="Time">Monday: 9:00am - 8:00pm</div>
                  <div className="Time">Tuesday: 9:00am - 8:00pm</div>
                  <div className="Time">Wednesday: 9:00am - 8:00pm</div>
                  <div className="Time">Thurday: 9:00am - 8:00pm</div>
                  <div className="Time">Friday: 9:00am - 8:00pm</div>
                  <div className="Time">Saturday: 9:00am - 8:00pm</div>
                  {/* <span>
                    <img className="Time-accordin" src={angle_up} alt="/"></img>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
          <Review />
        </div>
      )}
    </>
  );
};

export default Page;
