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
          <div className="second-split-info timestaps">
            <p>Check In</p>
            <p>Check Out</p>
          </div>

          <div className="second-split-info">
            <strong>18 Sept</strong>
            <strong>22 Sept </strong>
          </div>

          <div className="second-split-info timestaps">
            <p>Check In Time</p>
            <p>Check Out Time</p>
          </div>

          <div className="second-split-info">
            <strong>10:30</strong>
            <strong>11:30</strong>
          </div>
        </section>

        <section className="third-container">
          <strong>Number of Nights</strong>
          <p className="edit-option">Edit</p>
        </section>

        <section className="fourth-container">
          <strong>Payment Details</strong>

          <div className="fourth-split-info">
            <p>Base Price</p>
            <strong>Price</strong>
          </div>

          <div className="fourth-split-info">
            <p>Promo Discount</p>
            <strong>Promo</strong>
          </div>

          <div className="fourth-split-info">
            <p>Tax & Services Fees</p>
            <strong>Tax</strong>
          </div>
        </section>

        <section className="fifth-split-info">
          <p>Payable Amount</p>
          <strong>Amount</strong>
        </section>
      </section>
    </article>
  );
}
