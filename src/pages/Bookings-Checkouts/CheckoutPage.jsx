import React from "react";
import Payments from "./Payments";
import BookingInfo from "./BookingInfo";
import HeaderDashboard from "../DashBoard/HeaderDashboard";

export default function CheckoutPage() {
  return (
    <div>
      <HeaderDashboard />
      <div className="booking-info">
        <BookingInfo />
        <Payments />
      </div>
    </div>
  );
}
