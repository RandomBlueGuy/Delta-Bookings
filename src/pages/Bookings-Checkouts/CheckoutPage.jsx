import React from "react";
import Payments from "./Payments";
import BookingInfo from "./BookingInfo";

export default function CheckoutPage() {
  return (
    <div>
      <div className="booking-info">
        <BookingInfo />
        <Payments />
      </div>
    </div>
  );
}
