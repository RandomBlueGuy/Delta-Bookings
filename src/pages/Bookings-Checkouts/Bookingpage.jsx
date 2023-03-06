import React from "react";
import BookingInfo from "./BookingInfo";
import TravellerInfo from "./TravellerInfo";
import HeaderDashboard from "../DashBoard/HeaderDashboard";

import "./styles.css";

function Bookingpage() {
  return (
    <div>
      <HeaderDashboard />
      <div className="booking-info">
        <BookingInfo />
        <TravellerInfo />
      </div>
    </div>
  );
}

export default Bookingpage;
