import React from "react";
import "./HotelCard.css";
import heartEmptyIcon from "../../assets/Icons/heartEmpty.svg";
import StarRating from "../UniversalComponents/StarRating";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HotelCard({ hotelInfoCard }) {
  const finalPrice =
    hotelInfoCard.Rooms[0].card.OriginalPricePerNight -
    (
      hotelInfoCard.Rooms[0].card.OriginalPricePerNight *
      (hotelInfoCard.Rooms[0].card.Discount / 100)
    ).toFixed(0);
  return (
    <main className="hotel-card">
      <figure>
        <Link 
        to="/hotel-single"
        state={{data: hotelInfoCard}}
        >
          <img
            className="hotel-pic"
            src={`${hotelInfoCard.About.FrontImg}`}
            alt=""
          />
        </Link>
        <div className="heart-ctn">
          <img className="love-icon" src={heartEmptyIcon} alt="" />
        </div>
      </figure>
      <section className="card-description">
        <div className="HC-title">
          <div className="HC-subtitle">
            <h1>{hotelInfoCard.HotelName}</h1>
          </div>
          <div className="HC-location">
            <p>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              {hotelInfoCard.Location.City}
            </p>
          </div>
        </div>
        <div className="HC-description">
          <p>{hotelInfoCard.About.HotelDescription}</p>
        </div>
        <div className="score-system">
          <StarRating hotelRating={hotelInfoCard.About.StarRating} />
          <p>{hotelInfoCard.About.ReviewNumber} reviews</p>
        </div>
        <div className="price-tags">
          <h4>${hotelInfoCard.Rooms[0].card.OriginalPricePerNight}</h4>
          <h3>${finalPrice}</h3>
          <p className="tags">{hotelInfoCard.About.Tags[0]}</p>
          <p className="tags">{hotelInfoCard.About.Tags[1]}</p>
        </div>
      </section>
    </main>
  );
}

export default HotelCard;
