import React from "react";
import "./styles.css";

export default function TravellerInfo() {
  return (
    <article className="container-2">
      <section className="travelInfo-container">
        <h6>Traveller Information</h6>
        <div class="form-inline d-flex justify-content-between" role="form">
          <div class="form-group col-sm-6">
            <label for="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              placeholder="First Name"
            />
          </div>
          <div class="form-group col-sm-6">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
        </div>

        <section className="email-group">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              Booking confirmation will be sent to this email ID.
            </small>
          </div>
        </section>

        <section className="contact-info">
          <div class="form-group">
            <label for="contactInfo">Contact Info</label>
            <input
              type="tel"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="+57"
            />
          </div>
        </section>

        <section className="request-info">
          <label for="Request">Special Request</label>
          <textarea
            maxlength="120"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="E.g: Transport fee"
          ></textarea>
        </section>

        <section className="coupon-info">
          <label for="coupon">Have A Coupon Code?</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Promo Code"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button type="submit" class="btn btn-secondary">
                APPLY
              </button>
            </div>
          </div>
        </section>

        <section className="button-pay d-flex justify-content-end">
          <button type="button" class="pay-button btn btn-danger col-4">
            PAY NOW
          </button>
        </section>
      </section>
    </article>
  );
}
