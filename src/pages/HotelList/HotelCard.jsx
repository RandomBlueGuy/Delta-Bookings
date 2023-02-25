import React from "react";
import "./HotelCard.css";
import placeholderImg from "../../assets/Images/placeholder-card.png";
import heartEmptyIcon from "../../assets/Icons/heartEmpty.svg";
import locationIcon from "../../assets/Icons/location.svg";
import StarRating from "../UniversalComponents/StarRating";

function HotelCard() {
  return (
    <main className="hotel-card">
      <figure>
        <img className="hotel-pic" src={placeholderImg} alt="" />
        <div className="heart-ctn">
          <img className="love-icon" src={heartEmptyIcon} alt="" />
        </div>
      </figure>
      <section className="card-description">
        <div className="title">
          <h1>[HOTEL]</h1>
          <img src="" alt="" />
          <div className="location">
            <img src={locationIcon} alt="" />
            <p>[LOCATION]</p>
          </div>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut... LMAO
        </p>
        <div className="score-system">
          <StarRating />
          <p>[#] reviews</p>
        </div>
        <div className="price-tags">
          <h4>[OLD PRICE]</h4>
          <h3>[PRICE]</h3>
          <p className="tags">[TAG 1]</p>
          <p className="tags">[TAG 2]</p>
        </div>
      </section>
    </main>
  );
}

export default HotelCard;
