import React from "react";
import BookingInfo from "./BookingInfo";
import TravellerInfo from "./TravellerInfo";
import HomeHeader from "../Home/HomeHeader";
import Payments from "./Payments";
import "./styles.css";

function Bookingpage() {
  return (
    <div>
      <HomeHeader />
      <div className="booking-info">
        <BookingInfo />
        <TravellerInfo />
      </div>
    </div>
  );
}

export default Bookingpage;
