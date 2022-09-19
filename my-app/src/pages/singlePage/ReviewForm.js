import React from "react";
import "../singlePage/ReviewForm.scss";
import ReviewStar from "../../pages/singlePage/ReviewStar";
import ImageUpload from "../../pages/singlePage/ImageUpload";

const ReviewForm = () => {
  return (
    <div className="formContainer">
      <div className="revHead">Review form</div>
      <form className="reviewForm">
        <label className="fullname">Full name</label>
        <input className="fullName" type="text" placeholder="Full Name" />
        <label className="revDes">Review Description</label>
        <textarea
          className="reviewDes"
          type="text"
          placeholder="Enter Review Description"
        />
        <label className="starRatelabel">Your Rating</label>
        <ReviewStar />
        <label className="uploadImage">Upload Image</label>
        <ImageUpload />
        <button className="reviewBtn" type="submit">
          Submit review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
