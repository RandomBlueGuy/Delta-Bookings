import React from "react";
import "./styles.css";

export default function TravellerInfo() {
  return (
    <article className="container-2">
      <section className="travelInfo-container">
        <h4>Traveller Information</h4>
        <div className="person-info" role="form">
          <div class="name-info">
            <label for="firstname">
              First Name
              <input
                type="text"
                class="form-control"
                id="firstname"
                placeholder="First Name"
              />
            </label>
          </div>
          <div class="lastname-info">
            <label for="lastname">
              Last Name
              <input
                type="text"
                class="form-control"
                id="lastname"
                placeholder="Last Name"
              />
            </label>
          </div>
        </div>

        <section className="email-group">
          <div class="email-info">
            <label for="exampleInputEmail1">
              Email address
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </label>
            <small id="emailHelp" class="form-text text-muted">
              Booking confirmation will be sent to this email ID.
            </small>
          </div>
        </section>

        <section className="contact-info">
          <div class="form-group">
            <label for="contactInfo">
              Contact Info
              <input
                type="tel"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="+57"
              />
            </label>
          </div>
        </section>

        <section className="request-info">
          <label for="Request">
            Special Request
            <textarea
              maxlength="120"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="E.g: Transport fee"
            ></textarea>
          </label>
        </section>

        <section className="coupon-info">
          <label for="coupon">Have A Coupon Code?</label>
          <div className="coupon-wrapper">
            <input
              type="text"
              class="form-control"
              placeholder="Promo Code"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button type="submit" className="btn">
                APPLY
              </button>
            </div>
          </div>
        </section>

        <section className="button-pay">
          <button type="button" className="btn">
            PAY NOW
          </button>
        </section>
      </section>
    </article>
  );
}
