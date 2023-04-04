import React, { useState } from "react";

function Form2LocationData({ setFormTab, formTab, scrollToTop }) {
  const [info, setInfo] = useState({
    hotelAdress: "",
    hotelCity: "",
    hotelState: "",
    hotelCountry: "",
    hotelLatitude: "",
    hotelLongitude: "",
  });

  const {
    hotelAdress,
    hotelCity,
    hotelState,
    hotelCountry,
    hotelLatitude,
    hotelLongitude,
  } = info;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (hotelAdress.trim() === "") {
      validationErrors.hoteladress = "Enter the hotel's adress";
    }

    if (hotelState.trim() === "") {
      validationErrors.hotelstate = "Enter the hotel's state";
    } else if (!/^[a-zA-Z]+$/.test(hotelState.trim().replace(/\s+/g, ""))) {
      validationErrors.hotelstate =
        "Hotel's state name must only contain letters";
    }

    if (hotelCountry.trim() === "") {
      validationErrors.hotelcountry = "Enter the hotel's country";
    } else if (!/^[a-zA-Z]+$/.test(hotelCountry.trim().replace(/\s+/g, ""))) {
      validationErrors.hotelcountry =
        "Hotel's country name must only contain letters";
    }


    if (hotelCity.trim() === "") {
      validationErrors.hotelcity = "Enter the hotel's city";
    } else if (!/^[a-zA-Z]+$/.test(hotelCity.trim().replace(/\s+/g, ""))) {
      validationErrors.hotelcity =
        "Hotel's City name must only contain letters";
    }

    if (hotelCountry.trim() === "") {
      validationErrors.hotelcountry = "Enter the hotel's country";
    } else if (!/^[a-zA-Z]+$/.test(hotelCountry.trim().replace(/\s+/g, ""))) {
      validationErrors.hotelcountry =
        "Hotel's country name must only contain letters";
    }

    if (hotelLatitude.trim() === "") {
      validationErrors.hotellatitude = "Enter the hotel's latitude";
    } else if (
      !/^([-+])?([0-9]|[1-8][0-9])(\.\d+)?|90(\.0+)?$/.test(
        hotelLatitude.trim()
      )
    ) {
      validationErrors.hotellatitude = "Invalid Latitude";
    }

    if (hotelLongitude.trim() === "") {
      validationErrors.hotellongitude = "Enter the hotel's longitude";
    } else if (
      !/^([-+])?([0-9]|[1-9][0-9]|1[1-7][0-9])(\.\d+)?|180(\.0+)?$/.test(
        hotelLongitude.trim()
      )
    ) {
      validationErrors.hotellongitude = "Invalid Longitude";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setInfo({
        hotelAdress: "",
        hotelCity: "",
        hotelState: "",
        hotelCountry: "",
        hotelLatitude: "",
        hotelLongitude: "",
      });

      setErrors({});
    }
  };

  return (
    <form
      action=''
      onSubmit={handleInfo}
      className='CreateHotel--subHotel CH__form2'
    >
      <h2>Location data</h2>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelAdress'>
          Address:
        </label>
        <input
          id='inp1'
          className='HotelCreator__input'
          type='text'
          placeholder='Write your hotel address'
          name='hotelAdress'
          onChange={(event) => handleChange(event)}
          value={hotelAdress}
        />
        {errors.hoteladress && <span>{errors.hoteladress}</span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelCity'>
          City:
        </label>
        <input
          id='inp2'
          className='HotelCreator__input'
          type='text'
          placeholder='city'
          name='hotelCity'
          onChange={(event) => handleChange(event)}
          value={hotelCity}
        />
        {errors.hotelcity && <span>{errors.hotelcity}</span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelState'>
          State:
        </label>
        <input
          id='inp3'
          className='HotelCreator__input'
          type='text'
          placeholder='State'
          name='hotelState'
          onChange={(event) => handleChange(event)}
          value={hotelState}
        />
        {errors.hotelstate && <span>{errors.hotelstate}</span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelCountry'>
          Country:
        </label>
        <input
          id='inp4'
          className='HotelCreator__input'
          type='text'
          placeholder="Write your hotel's country"
          name='hotelState'
          onChange={(event) => handleChange(event)}
          value={hotelCountry}
        />
        {errors.hotelcountry && <span>{errors.hotelcountry}</span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelLatitude'>
          Latitude:
        </label>
        <input
          id='inp5'
          className='HotelCreator__input'
          type='text'
          placeholder="Write your hotel's latitude"
          name='hotelLatitude'
          onChange={(event) => handleChange(event)}
          value={hotelLatitude}
        />
        {errors.hotellatitude && <span>{errors.hotellatitude}</span>}
      </div>
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelLongitude'>
          Longitude:
        </label>
        <input
          id='inp5'
          className='HotelCreator__input'
          type='text'
          placeholder="Write your hotel's Longitude"
          name='hotelLongitude'
          onChange={(event) => handleChange(event)}
          value={hotelLongitude}
        />
        {errors.hotellongitude && <span>{errors.hotellongitude}</span>}
      </div>

      <div className='HotelForm__footer'>
        <button
          className='HotelCreator__form--microSubmit'
          onClick={(event) => {
            setFormTab(1);
            scrollToTop();
          }}
        >
          🡸
        </button>
        Step {formTab} / 5
        <button
          className='HotelCreator__form--microSubmit'
          onClick={(event) => {
            setFormTab(3);
            scrollToTop();
          }}
        >
          🢂
        </button>
      </div>
    </form>
  );
}

export default Form2LocationData;
