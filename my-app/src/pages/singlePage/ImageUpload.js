import React from "react";
import { useState } from "react";
import axios from "axios";

import "../../pages/singlePage/ReviewForm.scss";

const ImageUpload = () => {
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleApi = () => {
    //call the api
    const url = "";

    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(url, formData)
      .then((result) => {
        console.log(result.data);
        alert("success");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });
  };

  return (
    <div className="uploadContainer">
      <input className="fileUpload" type="file" onChange={handleChange} />
      <button className="uploadButt" onClick={handleApi}>
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;
