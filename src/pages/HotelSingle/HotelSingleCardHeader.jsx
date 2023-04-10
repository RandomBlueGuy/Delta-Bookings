import React from "react";
import StarRating from "../UniversalComponents/StarRating";
import "./HotelSingleCardHeader.css";
import shareIcon from "../../assets/Icons/share.svg";
import saveIcon from "../../assets/Icons/heartEmpty.svg";

function HotelSingleCardHeader({currentHotel}) {

  return (
    <main className="HotelSingleCardHeader-ctn">
      <section className="HotelSingleCardHeader-general-info">
        <div className="general-info-title">
          <h1>{currentHotel?.HotelName}</h1>
          <div className="info-unnecessary">
            <StarRating className="hotelsingle-displayer" hotelRating={currentHotel?.StarRating} />
          </div>
          <button>
            <img src={shareIcon} alt="" />
            <p className="button__txtDisplay">Share</p>
          </button>
          <button>
            <img src={saveIcon} alt="" />
            <p className="button__txtDisplay">Save</p>
          </button>
        </div>
        <div className="HotelSingleCardHeader-general-description">
          <h3>
            {currentHotel?.loc_City} , {currentHotel?.loc_Country}
          </h3>
          <div className="HotelSingleCardHeader-general-buttons">
            {currentHotel.Tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="HotelSingleCardHeader-general-price">
        <h1>
          $ {(currentHotel?.Rooms[0]?.OriginalPricePerNight).toFixed(0)}
          <span>/ Per Nigth</span>
        </h1>
        <button>Book This Now</button>
      </section>
    </main>
  );
}

export default HotelSingleCardHeader;
