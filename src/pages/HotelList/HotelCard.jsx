import React from "react";
import "./HotelCard.css";
import heartEmptyIcon from "../../assets/Icons/heartEmpty.svg";
import StarRating from "../UniversalComponents/StarRating";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function HotelCard({ hotelInfoCard, searchParams }) {
  const navigate = useNavigate();
  const tagsArr = hotelInfoCard.Tags.split("-/-");

  const finalPrice =
    hotelInfoCard.Rooms[0].OriginalPricePerNight -
    (
      hotelInfoCard.Rooms[0].OriginalPricePerNight *
      (hotelInfoCard.Rooms[0].Discount / 100)
    ).toFixed(0);

  function handleNavigate() {
    const { checkInDate, checkOutDate, guestnumber } = searchParams;

    const newSearchParams = {
      id: hotelInfoCard.id,
      city: hotelInfoCard.loc_City,
      checkInDate,
      checkOutDate,
      guestnumber,
    };

    const queryString = new URLSearchParams(newSearchParams).toString();
    navigate(`/hotel-single/htlnfo?${queryString}`);
  }

  return (
    <main className='hotel-card'>
      <figure>
        <img
          className='hotel-pic'
          src={`${hotelInfoCard.FrontImg}`}
          alt=''
          onClick={handleNavigate}
        />

        <div className='heart-ctn'>
          <img className='love-icon' src={heartEmptyIcon} alt='' />
        </div>
        <div
          className='card__specialtag'
          style={{
            display: hotelInfoCard.SpecialTags === "NoTag" ? "none" : "flex",
          }}
        >
          {hotelInfoCard.SpecialTags}
        </div>
      </figure>
      <section className='card-description'>
        <div className='HC-title'>
          <div className='HC-subtitle'>
            <h1>{hotelInfoCard.HotelName.slice(0, 20)}...</h1>
          </div>
          <div className='HC-location'>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              {hotelInfoCard.loc_City}
            </p>
          </div>
        </div>
        <div className='HC-description'>
          <p>{hotelInfoCard.HotelDescription.slice(0, 130)}...</p>
        </div>
        <div className='score-system'>
          <StarRating hotelRating={hotelInfoCard.StarRating} />
          <p>{hotelInfoCard.ReviewNumber} reviews</p>
        </div>
        <div className='price-tags'>
          <h4>${hotelInfoCard.Rooms[0].OriginalPricePerNight.toFixed(0)}</h4>
          <h3>${finalPrice.toFixed(0)}</h3>
          {tagsArr.map((tag, index) => (
            <p className='tags' key={index}>
              {tag}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HotelCard;
