import React from "react";
import "./CheckCard.css";
import GoogleMap from "google-map-react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CheckCard() {


  return (
    <section className="check__card">
      <div className="check__card-map">
        <GoogleMap
          center={{ lat: 6.266716684592229, lng: -75.58217656599909 }}
          zoom={20}
        ></GoogleMap>
      </div>
      <section className="check__card-info">
        <div className="check__card-rate">
          <h4 className="rate-title">[RATE TYPE]</h4>
          <p className="rate-description">
            <FontAwesomeIcon icon={faCheck} />
            [SERVICE INFO]
          </p>
          <p className="rate-description">
            <FontAwesomeIcon icon={faCheck} />
            [SERVICE INFO]
          </p>
        </div>

        <div className="check__card-price">
          <p>Per Nigth</p>
          <h2>[$$$]</h2>
          <h1>[$$$]</h1>
        </div>
      </section>

      <form className="check__card-form" action="">
        <label htmlFor="check-in">Check-in Date</label>
        <input type="date" placeholder="Check-In Date" />
        <label htmlFor="check-out">Check-out Date</label>
        <input type="date" placeholder="Check-out Date" />
        <label htmlFor="city-destination">City Destination</label>
        <input type="text" placeholder="City Destination" />
        <label htmlFor="room-type">Room Type</label>
        <input type="select" placeholder="Room Type" />
        <button className="search-btn">Book This Now</button>
      </form>
    </section>
  );
}

export default CheckCard;
