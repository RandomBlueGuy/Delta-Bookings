import React from "react";
import BookingInfo from "./BookingInfo";
import TravellerInfo from "./TravellerInfo";
import Payments from './Payments';

function Bookingpage() {
  const proceed = false;
  return (
    <div>
      <div className="booking-info">
        <BookingInfo />
        {proceed && <Payments />}
        {!proceed && <TravellerInfo />}
      </div>
    </div>
  );
}

export default Bookingpage;
