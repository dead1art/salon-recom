import React from "react";
import "./Review.scss";
import Star from "../../assets/star.png";
import ReviewForm from "../../pages/singlePage/ReviewForm";

const Review = () => {
  return (
    <div className="cusReview">
      <div className="revName">Reviews</div>
      <div className="revContainer">
        <div className="revFilter">
          <div className="rateStars">
            <img src={Star} alt="star" className="rateStar1" />
            <img src={Star} alt="star" className="rateStar2" />
            <img src={Star} alt="star" className="rateStar3" />
            <img src={Star} alt="star" className="rateStar4" />
            <img src={Star} alt="star" className="rateStar5" />
          </div>
          <div className="rateSummary">
            <div className="rateScore">5.0 Great</div>
            <div className="rateNumber">32 ratings</div>
          </div>
          <div className="reviewlink">
            <div className="buttonHead">
              Share your thoughts with other customers
            </div>
            <a href="ReviewForm" className="reviewForm" alt="ReviewForm">
              <button className="reviewButton">Write a customer Review</button>
            </a>
          </div>
        </div>
      </div>

      <div className="reviewSection"></div>
      <div className="rate"></div>
    </div>
  );
};

export default Review;
