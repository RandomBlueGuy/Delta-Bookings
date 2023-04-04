import React, { useState } from "react";

function Form1BasicInfo({ setFormTab, formTab, scrollToTop }) {
  const [info, setInfo] = useState({
    hotelName: "",
    hotelWebsite: "",
    hotelNumber: "",
    hotelEmail: "",
    hotelDescription: "",
    hotelFront: null,
  });

  const {
    hotelName,
    hotelWebsite,
    hotelNumber,
    hotelEmail,
    hotelDescription,
    hotelFront,
  } = info;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (hotelName.trim() === "") {
      validationErrors.hotelname = "Enter the name of the hotel";
    }

    if (hotelWebsite.trim() === "") {
      validationErrors.hotelwebsite = "Enter your website";
    } else if (hotelWebsite.test(/^(?!.*\s)www\..+\.com$/)) {
      validationErrors.hotelwebsite = "Invalid Website";
    }

    if (hotelNumber.trim() === "") {
      validationErrors.hotelnumber = "Please enter the hotel's number";
    } else if (!/^[0-9]*$/.test(hotelNumber.trim().replace(/\s+/g, ""))) {
      validationErrors.hotelnumber = "Only numbers are valid";
    } else if (hotelNumber.trim().replace(/\s+/g, "").length < 5) {
      validationErrors.hotelnumber = "Enter a number long enough to be valid";
    }

    if (hotelEmail.trim() === "") {
      validationErrors.hotelemail = "Please enter the hotel's email";
    }

    if (hotelDescription.trim() === "") {
      validationErrors.hoteldescription = "enter your hotel's description";
    } else if (hotelDescription.replace(/\s+/g, "").length > 100) {
      validationErrors.hoteldescription =
        "Please give us a shorter description";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setInfo({
        hotelName: "",
        hotelWebsite: "",
        hotelNumber: "",
        hotelEmail: "",
        hotelDescription: "",
        hotelFront: "",
      });
      setErrors({});
    }
  };

  return (
    <form
      action=''
      className='CreateHotel--subHotel CH__form1'
      onSubmit={handleInfo}
    >
      <h2>Basic information</h2>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelName'>
          Name:
        </label>
        <input
          name='hotelName'
          id='inp1'
          className='HotelCreator__input'
          type='text'
          placeholder='Write your new hotel Name'
          onChange={(event) => handleChange(event)}
          value={hotelName}
        />
        {errors.hotelname && <span> {errors.hotelname} </span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelWebsite'>
          Website:
        </label>
        <input
          id='inp2'
          className='HotelCreator__input'
          type='text'
          placeholder='Write your hotel site (no spaces /)'
          name='hotelWebsite'
          onChange={(event) => handleChange(event)}
          value={hotelWebsite}
        />
        {errors.hotelwebsite && <span> {errors.hotelwebsite} </span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelNumber'>
          Phone number:
        </label>
        <input
          id='inp3'
          className='HotelCreator__input'
          type='text'
          placeholder='Write your new hotel phone number (only numbers)'
          name='hotelNumber'
          onChange={(event) => handleChange(event)}
          value={hotelNumber}
        />
        {errors.hotelnumber && <span> {errors.hotelnumber} </span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelEmail'>
          Email:
        </label>
        <input
          id='inp4'
          className='HotelCreator__input'
          type='email'
          placeholder='Write your new hotel email address'
          name='hotelEmail'
          onChange={(event) => handleChange(event)}
          value={hotelEmail}
        />
        {errors.hotelemail && <span> {errors.hotelemail} </span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelDescription'>
          Description:
        </label>
        <input
          id='inp5'
          className='HotelCreator__input'
          type='text'
          placeholder='Write your new hotel description'
          name='hotelDescription'
          onChange={(event) => handleChange(event)}
          value={hotelDescription}
        />
        {errors.hoteldescription && <span> {errors.hoteldescription} </span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelFront'>
          Front image
        </label>
        <input
          type='file'
          name='hotelFront'
          accept='image/png, image/jpeg, image/jpg'
          multiple
          onChange={(event) => handleChange(event)}
        />
      </div>

      <div className='HotelForm__footer'>
        <button
          className='HotelCreator__form--microSubmit'
          onClick={(event) => {
            event.preventDefault();
          }}
          style={{ opacity: "0" }}
        >
          🡸
        </button>
        Step {formTab} / 5
        <button
          className='HotelCreator__form--microSubmit'
          onClick={(event) => {
            setFormTab(2);
            scrollToTop();
          }}
        >
          🢂
        </button>
      </div>
    </form>
  );
}

export default Form1BasicInfo;
