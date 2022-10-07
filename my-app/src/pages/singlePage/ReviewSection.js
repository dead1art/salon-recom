import React from "react";
import "./../singlePage/ReviewForm.scss";

const ReviewSection = () => {
  return (
    <ul className="reviewsecCont">
      <div className="revCont">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="/"
          className="profilePic"
        />
        <div className="nameAndDate">
          <div className="profileName">Jane Doe</div>
          <div className="profileDate">21 Sep 2022</div>
        </div>
      </div>
      <div className="profileRating">⭐⭐⭐⭐</div>
      <div className="profileComment">
        It was a good makeover, would definetly visit again😊❤️
      </div>
    </ul>
  );
};

export default ReviewSection;
