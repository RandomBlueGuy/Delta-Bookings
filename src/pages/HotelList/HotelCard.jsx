import React from "react";
import "./HotelCard.css";
import heartEmptyIcon from "../../assets/Icons/heartEmpty.svg";
import StarRating from "../UniversalComponents/StarRating";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HotelCard({ hotelInfoCard }) {
  console.log("hotelInfoCard =>" ,hotelInfoCard)
  const finalPrice =
    hotelInfoCard.Rooms[0].OriginalPricePerNight -
    (
      hotelInfoCard.Rooms[0].OriginalPricePerNight *
      (hotelInfoCard.Rooms[0].Discount / 100)
    ).toFixed(0);
  return (
    <main className="hotel-card">
      <figure>
        <Link 
        to= {`/hotel-single/${hotelInfoCard.HotelId}`}
        state={{data: hotelInfoCard}}
        >
          <img
            className="hotel-pic"
            src={`${hotelInfoCard.FrontImg}`}
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
            <h1>{hotelInfoCard.HotelName.slice(0, 20)}</h1>
          </div>
          <div className="HC-location">
            <p>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              {hotelInfoCard.loc_City}
            </p>
          </div>
        </div>
        <div className="HC-description">
          <p>{hotelInfoCard.HotelDescription.slice(0, 130)}...</p>
        </div>
        <div className="score-system">
          <StarRating hotelRating={hotelInfoCard.StarRating} />
          <p>{hotelInfoCard.ReviewNumber} reviews</p>
        </div>
        <div className="price-tags">
          <h4>${(hotelInfoCard.Rooms[0].OriginalPricePerNight).toFixed(2)}</h4>
          <h3>${finalPrice.toFixed(2)}</h3>
          <p className="tags">{hotelInfoCard.Tags[0]}</p>
          <p className="tags">{hotelInfoCard.Tags[1]}</p>
        </div>
      </section>
    </main>
  );
}

export default HotelCard;
