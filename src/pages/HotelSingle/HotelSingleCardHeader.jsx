import React, { useContext } from "react";
import StarRating from "../UniversalComponents/StarRating";
import "./HotelSingleCardHeader.css";
import shareIcon from "../../assets/Icons/share.svg";
import saveIcon from "../../assets/Icons/heartEmpty.svg";
import { HotelSingleContext } from "./HotelSingleContext/HotelSingleContext";

function HotelSingleCardHeader() {
  const HotelData = useContext(HotelSingleContext);
  return (
    <main className="HotelSingleCardHeader-ctn">
      <section className="HotelSingleCardHeader-general-info">
        <div className="general-info-title">
          <h1>{HotelData?.HotelName}</h1>
          <div className="info-unnecessary">
            <StarRating className="hotelsingle-displayer" hotelRating={HotelData?.About?.StarRating}/>
          </div>
          <button>
            <img src={shareIcon} alt="" />
            Share
          </button>
          <button>
            <img src={saveIcon} alt="" />
            Save
          </button>
        </div>
        <div className="HotelSingleCardHeader-general-description">
          <h3>
            {HotelData?.Location?.City} , {HotelData?.Location?.Country}
          </h3>
          <div className="HotelSingleCardHeader-general-buttons">
				{HotelData?.About?.Tags.map(item => <button>{item}</button>)}
				
          </div>
        </div>
      </section>

      <section className="HotelSingleCardHeader-general-price">
        <h1>
          $ {HotelData?.Rooms[0]?.card?.OriginalPricePerNight} <span>/ Per Nigth</span>
        </h1>
        <button>Book This Now</button>
      </section>
    </main>
  );
}

export default HotelSingleCardHeader;
