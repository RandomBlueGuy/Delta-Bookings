import React, { useState, useEffect } from "react";
import axios from "axios";
import { useJwt } from "react-jwt";
import { useCookies } from "react-cookie";
import "./styles.css";

export default function TravellerInfo({ fillTravellerInfo }) {
  const COUPON_CODE = process.env.REACT_APP_COUPON_CODE;
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [errors, setErrors] = useState({});
  const letterRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  const numberRegex = /^[0-9]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [cookies] = useCookies("cookieToken");
  const decode = useJwt(cookies.cookieToken);
  const [info, setInfo] = useState({
    fullName: "",
    inputEmail: "",
    contactInfo: "",
    request: "",
    coupon: "",
  });
  const { fullName, inputEmail, contactInfo, request, coupon } = info;

  useEffect(() => {
    if (decode && decode.decodedToken && decode.decodedToken.id) {
      const id = decode.decodedToken.id;
      axios
        .get(`${DB_URL}/api/users/${id}`)
        .then((response) => {
          setInfo({
            ...info,
            fullName: response.data.data.fullName,
            inputEmail: response.data.data.email,
            contactInfo: response.data.data.phoneNumber,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [decode.decodedToken]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!fullName.trim()) {
      validationErrors.fullName = "Please enter your full name";
    } else if (!letterRegex.test(fullName.trim().replace(/\s+/g, ""))) {
      validationErrors.fullName =
        "Name must contain only letters and no accents or special characters (@%/á)";
    } else if (fullName.trim().length < 2) {
      validationErrors.fullName = "Name must be at least 2 characters long";
    }

    if (!inputEmail.trim()) {
      validationErrors.email = "Please enter your email";
    } else if (!emailRegex.test(inputEmail.trim().replace(/\s+/g, ""))) {
      validationErrors.email = "Enter a Valid Email";
    }

    if (!contactInfo.trim()) {
      validationErrors.number = "Please enter your phone number";
    } else if (contactInfo.trim().replace(/\s+/g, "").length !== 10) {
      validationErrors.number =
        "Number cannot be longer  or shorter than 10 digits";
    } else if (!numberRegex.test(contactInfo.trim().replace(/\s+/g, ""))) {
      validationErrors.number = "Only numeric characters are accepted";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      fillTravellerInfo(fullName, inputEmail, contactInfo, request, coupon);

      setErrors({});
    }
  };

  function handleCoupon() {
    if (coupon === COUPON_CODE) {
    } else {
    }
  }

  return (
    <div className="container-2">
      <section className="travelInfo-container">
        <h4>Traveller Information</h4>
        <div className="email-group" role="form">
          <label htmlFor="fullName">
            Full Name
            <input
              name="fullName"
              type="text"
              class="form-control"
              id="fullName"
              placeholder="First Name"
              onChange={(event) => handleChange(event)}
              value={fullName}
            />
            {errors.fullName && (
              <span className="error-creatorAdmin">{errors.fullName}</span>
            )}
          </label>
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
              {errors.email && (
                <span className="error-creatorAdmin">{errors.email}</span>
              )}
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
              {errors.number && (
                <span className="error-creatorAdmin">{errors.number}</span>
              )}
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
              id="text-area-form"
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
              <button type="button" className="btn" onClick={handleCoupon}>
                APPLY
              </button>
            </div>
          </div>
        </section>

        <section className="button-pay">
          <button type="submit" className="btn" onClick={handleInfo}>
            PAY NOW
          </button>
        </section>
      </section>
    </div>
  );
}
