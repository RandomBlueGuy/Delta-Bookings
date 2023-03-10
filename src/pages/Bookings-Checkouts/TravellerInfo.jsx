import React, { useState } from "react";
import "./styles.css";

export default function TravellerInfo() {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    inputEmail: "",
    contactInfo: 0,
    request: "",
    coupon: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
    console.log(info);
  };

  //const handleInfo = (event) => {};

  const { firstname, lastname, inputEmail, contactInfo, request, coupon } =
    info;

  return (
    <article className="container-2">
      <section className="travelInfo-container">
        <h4>Traveller Information</h4>
        <div className="person-info" role="form">
          <div class="name-info">
            <label htmlFor="firstname">
              First Name
              <input
                name="firstname"
                type="text"
                class="form-control"
                id="firstname"
                placeholder="First Name"
                onChange={(event) => handleChange(event)}
                value={firstname}
              />
            </label>
          </div>
          <div class="lastname-info">
            <label htmlFor="lastname">
              Last Name
              <input
                name="lastname"
                type="text"
                class="form-control"
                id="lastname"
                onChange={(event) => handleChange(event)}
                placeholder="Last Name"
                value={lastname}
              />
            </label>
          </div>
        </div>

        <section className="email-group">
          <div class="email-info">
            <label htmlFor="inputEmail">
              Email address
              <input
                name="inputEmail"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => handleChange(event)}
                placeholder="Enter email"
                value={inputEmail}
              />
            </label>
            <small id="emailHelp" class="form-text text-muted">
              Booking confirmation will be sent to this email ID.
            </small>
          </div>
        </section>

        <section className="contact-info">
          <div class="form-group">
            <label htmlFor="contactInfo">
              Contact Info
              <input
                name="contactInfo"
                type="tel"
                class="form-control"
                id="exampleInputEmail1"
                onChange={(event) => handleChange(event)}
                placeholder="+57"
                value={contactInfo}
              />
            </label>
          </div>
        </section>

        <section className="request-info">
          <label htmlFor="request">
            Special Request
            <textarea
              name="request"
              maxlength="60"
              class="form-control"
              id="exampleFormControlTextarea1"
              onChange={(event) => handleChange(event)}
              rows="2"
              placeholder="E.g: Transport fee"
              value={request}
            ></textarea>
          </label>
        </section>

        <section className="coupon-info">
          <label htmlFor="coupon">Have A Coupon Code?</label>
          <div className="coupon-wrapper">
            <input
              name="coupon"
              type="text"
              class="form-control"
              placeholder="Promo Code"
              onChange={(event) => handleChange(event)}
              aria-describedby="basic-addon2"
              value={coupon}
            />
            <div class="input-group-append">
              <button type="submit" className="btn">
                APPLY
              </button>
            </div>
          </div>
        </section>

        <section className="button-pay">
          <button type="submit" className="btn">
            PAY NOW
          </button>
        </section>
      </section>
    </article>
  );
}
