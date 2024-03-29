import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Categories.scss";
import CategoriesData from "../../data/Categories-Data.json";

export const Categories = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <div className="title">Top Categories</div>
      {/* <hr className="Line"></hr> */}
      <div className="Categories-container">
        {CategoriesData &&
          CategoriesData.map((category) => {
            return (
              <a href="#" className="item" key={category.id}>
                <img
                  className="Categories_image"
                  src={category["Card-image"]}
                  alt="/"
                />
                <br />
                <div className="image_title">{category.Category}</div>
              </a>
            );
          })}
      </div>
    </div>
  );
};
