import React from "react";
import "./styles.css";

export default function BookingModule() {
  return (
    <article className="container-1">
      <section className="info-container">
        <h4>Booking Summary</h4>
        <section className="first-container">
          <img
            src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
            alt=""
            className="picture-example"
          />
          <div className="hotel-info">
            <strong className="hotel-name">Hotel Name</strong>
            <p>Hotel Location</p>
          </div>
        </section>

        <section className="second-container">
          <div className="split-info">
            <p>Check In</p>
            <p>Check Out</p>
          </div>

          <div className="split-info">
            <p>18 Sept</p>
            <p>22 Sept </p>
          </div>

          <div className="split-info">
            <p>Check In Time</p>
            <p>Check Out Time</p>
          </div>

          <div className="split-info">
            <p>10:30</p>
            <p>11:30</p>
          </div>
        </section>

        <section className="split-info">
          <p>Number of Nights</p>
          <p>Edit</p>
        </section>

        <section className="fourth-container">
          <h4>Payment Details</h4>

          <div className="split-info">
            <p>Base Price</p>
            <p>Price</p>
          </div>

          <div className="split-info">
            <p>Promo Discount</p>
            <p>Promo</p>
          </div>

          <div className="split-info">
            <p>Tax & Services Fees</p>
            <p>Tax</p>
          </div>
        </section>

        <section className="split-info">
          <p>Payable Amount</p>
          <p>Amount</p>
        </section>
      </section>
    </article>
  );
}
