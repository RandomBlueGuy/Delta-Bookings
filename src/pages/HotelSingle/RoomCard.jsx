import React, { useContext } from "react";
import { HotelSingleContext } from "./HotelSingleContext/HotelSingleContext";
import "./RoomCard.css";
import hotelPlaceholderImg from "../../assets/Images/hotelPlaceholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShower,
  faBed,
  faTv,
  faCouch,
  faTick,
  faCheck,
  faSwimmingPool,
} from "@fortawesome/free-solid-svg-icons";

function RoomCard({ RoomCardData }) {
  const HotelData = useContext(HotelSingleContext);
  return (
    <main className="RoomCard-ctn">
      <div className="RoomCard-title">
        <h1>{RoomCardData?.RoomName}</h1>
      </div>
      <section className="RoomCard-table">
        <div className="RoomCard-table-img">
          <img src={`${RoomCardData?.RoomImg}`} alt="" />
        </div>
        <div className="RoomCard-table-amenities">
          <ul>
            <h4>Amenities</h4>
            {RoomCardData.Amenities.map((amenities) => (
              <li>
                {amenities}
              </li>
            ))}
          </ul>
        </div>
        <div className="RoomCard-table-inclusion">
          <ul>
            <h4>Inclusions</h4>
            {RoomCardData.Inclusions.map((inclusion) => (
              <li>
                <FontAwesomeIcon icon={faCheck} />
                {inclusion}
              </li>
            ))}
          </ul>
        </div>
        <div className="RoomCard-table-price">
          <p className="RC-discount">${(RoomCardData?.OriginalPricePerNight).toFixed(0)}</p>
          <p className="RC-new-pri">
            $
            {(
              RoomCardData?.OriginalPricePerNight -
              (RoomCardData?.OriginalPricePerNight * RoomCardData?.Discount) /
                100
            ).toFixed(0)}
          </p>
          <p>per night</p>
          <button>Book Now</button>
        </div>
      </section>
    </main>
  );
}

export default RoomCard;
