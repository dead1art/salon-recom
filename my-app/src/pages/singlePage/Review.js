import React from "react";
import { Link } from "react-router-dom";

import "./Review.scss";
import Star from "../../assets/star.png";
import { ReviewSection } from "./ReviewSection";

export const Review = () => {
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
            <Link to={`/ReviewForm`} className="reviewForm">
              <button className="reviewButton">Write a customer Review</button>
            </Link>
          </div>
        </div>
        <ReviewSection />
      </div>
    </div>
  );
};

export default Review;
