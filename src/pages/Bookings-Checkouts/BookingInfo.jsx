import React from "react";
import "./styles.css";

 
export default function BookingModule() {
  return (
    <article className="container-1">
      <section className="info-container">
        <h6>Booking Summary</h6>
        <section className="first-container d-flex justify-content-start align-items-center">
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
          <div className="d-flex justify-content-between">
            <p>Check In</p>
            <p>Check Out</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>18 Sept</p>
            <p>22 Sept </p>
          </div>

          <div className="checkout-in d-flex justify-content-between">
            <p>Check In Time</p>
            <p>Check Out Time</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>10:30</p>
            <p>11:30</p>
          </div>
        </section>

        <section className="third-container d-flex justify-content-between">
          <p>Number of Nights</p>
          <p>Edit</p>
        </section>

        <section className="fourth-container">
          <h5>Payment Details</h5>

          <div className="d-flex justify-content-between">
            <p>Base Price</p>
            <p>Price</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Promo Discount</p>
            <p>Promo</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Tax & Services Fees</p>
            <p>Tax</p>
          </div>
        </section>

        <section className="fifth-container d-flex justify-content-between">
          <p>Payable Amount</p>
          <p>Amount</p>
        </section>
      </section>
    </article>
  );
}
