import React from "react";
import "./styles.css";

export default function BookingModule({
  searchParams,
  hotelName = "",
  hotelCity = "",
  hotelCountry = "",
  hotelImg = "",
  price
}) {
  return (
    <article className="container-1">
      <section className="info-container">
        <h4>Booking Summary</h4>
        <section className="first-container">
          <img src={hotelImg} alt="" className="picture-example" />
          <div className="hotel-info">
            <strong className="hotel-name">{hotelName}</strong>
            <p>
              {hotelCity}
              {", "}
              {hotelCountry}
            </p>
          </div>
        </section>

        <section className="second-container" id="first">
          <div className="second-split-info timestaps">
            <p>Check In</p>
            <p>Check Out</p>
          </div>

          <div className="second-split-info">
            <strong>{searchParams.checkIn}</strong>
            <strong>{searchParams.checkOut}</strong>
          </div>
{/* 
          <div className="second-split-info timestaps" id="second">
            <p>Check In Time</p>
            <p>Check Out Time</p>
          </div>

          <div className="second-split-info">
            <strong>{Math.floor(Math.random() * 4) + 8}:30</strong>
            <strong>{Math.floor(Math.random() * 4) + 16}:30</strong>
          </div> */}
        </section>

        <section className="third-container" id="third">
          <strong>
            {searchParams.guestN} Guests, {price.RoomName}, {price.nights}  Nights
          </strong>
          <p className="edit-option"></p>
        </section>

        <section className="fourth-container" id="fourth">
          <strong>Payment Details</strong>

          <div className="fourth-split-info">
            <p>Base Price</p>
            <strong>{price.basePrice} $</strong>
          </div>

          <div className="fourth-split-info">
            <p>Promo Discount</p>
            <strong>- {price.discount} $</strong>
          </div>

          <div className="fourth-split-info">
            <p>Tax & Services Fees: 19%</p>
            <strong>+ {price.tax} $</strong>
          </div>
        </section>

        <section className="fifth-split-info" id="fifth">
          <p>Payable Amount</p>
          <strong> {price.finalPrice} $</strong>
        </section>
      </section>
    </article>
  );
}
