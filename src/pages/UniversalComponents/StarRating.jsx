import React from "react";
import "./StarRating.css";

function StarRating({hotelRating = Math.random()*5}) {
  const RatingPercentage = (hotelRating.toFixed(2)*20).toString()+ "%";
  return (
    <main className="StarRating">
      <p>★★★★★ </p>
      <div className="star-painter" style={{ width: `${RatingPercentage}`}}>
        <p>★★★★★</p>
      </div>
    </main>
  );
}

export default StarRating;
