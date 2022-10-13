import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

import "../../pages/singlePage/ReviewForm.scss";

const ReviewStar = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };

  return (
    <div className="starComp">
      <Rating
        onClick={handleRating}
        allowHalfIcon
        size={30}
        ratingValue={rating}
        // label
        // transition
        fillColor="orange"
        emptyColor="gray"
        // className="foo" // Will remove the inline style if applied
      />
      {/* Use rating value */}
      {/* {rating} */}
    </div>
  );
};

export default ReviewStar;
