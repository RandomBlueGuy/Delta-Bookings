import React from "react";
import BookingInfo from "./BookingInfo";
import TravellerInfo from "./TravellerInfo";

function Bookingpage() {
  return (
    <div>
      <div className="booking-info">
        <BookingInfo />
        <TravellerInfo />
      </div>
    </div>
  );
}

export default Bookingpage;
