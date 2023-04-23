import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function TravellerInfo() {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    inputEmail: "",
    contactInfo: "",
    request: "",
    coupon: "",
  });
  const [errors, setErrors] = useState({});
  const numberRegex = /^[a-zA-Z]+$/;

  const { firstname, lastname, inputEmail, contactInfo, request, coupon } =
    info;

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
    if (!firstname.trim()) {
      validationErrors.firstName = "Please enter your first name";
    } else if (!numberRegex.test(firstname)) {
      validationErrors.firstName = "First name must contain only letters";
    } else if (firstname.trim().length < 2) {
      validationErrors.firstName =
        "First name must be at least 2 characters long";
    }

    if (!lastname.trim()) {
      validationErrors.lastName = "Please enter your second name";
    } else if (!numberRegex.test(lastname)) {
      validationErrors.lastName = "Last name must contain only letters";
    } else if (firstname.trim().length < 2) {
      validationErrors.lastName =
        "Last name must be at least 2 characters long";
    }

    if (!inputEmail.trim()) {
      validationErrors.email = "Please enter your email";
    }

    if (!contactInfo) {
      validationErrors.number = "Please enter your phone number";
    } else if (contactInfo.trim().replace(/\s+/g, "").length !== 10) {
      validationErrors.number =
        "Number cannot be longer  or shorter than 10 digits";
    } else if (!numberRegex.test(contactInfo.trim().replace(/\s+/g, ""))) {
      validationErrors.number = "Only numeric characters are accepted";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          firstname,
          lastname,
          inputEmail,
          contactInfo,
          request,
          coupon,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <form onSubmit={handleInfo} className='container-2'>
      <section className='travelInfo-container'>
        <h4>Traveller Information</h4>
        <div className='person-info' role='form'>
          <div class='name-info'>
            <label htmlFor='firstname'>
              First Name
              <input
                name='firstname'
                type='text'
                class='form-control'
                id='firstname'
                placeholder='First Name'
                onChange={(event) => handleChange(event)}
                value={firstname}
              />
              {errors.firstName && (
                <span className='error'>{errors.firstName}</span>
              )}
            </label>
          </div>
          <div class='lastname-info'>
            <label htmlFor='lastname'>
              Last Name
              <input
                name='lastname'
                type='text'
                class='form-control'
                id='lastname'
                onChange={(event) => handleChange(event)}
                placeholder='Last Name'
                value={lastname}
              />
              {errors.lastName && (
                <span className='error'>{errors.lastName}</span>
              )}
            </label>
          </div>
        </div>

        <section className='email-group'>
          <div class='email-info'>
            <label htmlFor='inputEmail'>
              Email address
              <input
                name='inputEmail'
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                onChange={(event) => handleChange(event)}
                placeholder='Enter email'
                value={inputEmail}
              />
              {errors.email && <span className='error'>{errors.email}</span>}
            </label>
            <small id='emailHelp' class='form-text text-muted'>
              Booking confirmation will be sent to this email ID.
            </small>
          </div>
        </section>

        <section className='contact-info'>
          <div class='form-group'>
            <label htmlFor='contactInfo'>
              Contact Info
              <input
                name='contactInfo'
                type='tel'
                class='form-control'
                id='exampleInputEmail1'
                onChange={(event) => handleChange(event)}
                placeholder='+57'
                value={contactInfo}
              />
              {errors.number && <span className='error'>{errors.number}</span>}
            </label>
          </div>
        </section>

        <section className='request-info'>
          <label htmlFor='request'>
            Special Request
            <textarea
              name='request'
              maxlength='60'
              class='form-control'
              id='exampleFormControlTextarea1'
              onChange={(event) => handleChange(event)}
              rows='2'
              placeholder='E.g: Transport fee'
              value={request}
            ></textarea>
          </label>
        </section>

        <section className='coupon-info'>
          <label htmlFor='coupon'>Have A Coupon Code?</label>
          <div className='coupon-wrapper'>
            <input
              name='coupon'
              type='text'
              class='form-control'
              placeholder='Promo Code'
              onChange={(event) => handleChange(event)}
              aria-describedby='basic-addon2'
              value={coupon}
            />
            <div class='input-group-append'>
              <button type='submit' className='btn'>
                APPLY
              </button>
            </div>
          </div>
        </section>

        <section className='button-pay'>
          <button type='submit' className='btn'>
            PAY NOW
          </button>
        </section>
      </section>
    </form>
  );
}
