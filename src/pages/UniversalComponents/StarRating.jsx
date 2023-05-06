import React from "react";
import "./StarRating.css";

function StarRating({ hotelRating = Math.random() * 5 }) {
  const RatingPercentage = (hotelRating.toFixed(2) * 20).toString() + "%";
  return (
    <main className="StarRating">
      <h6>★★★★★</h6>
      <div className="star-painter" style={{ width: `${RatingPercentage}` }}>
        <h6>★★★★★</h6>
      </div>
    </main>
  );
}

export default StarRating;
