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
  const [render, setRender] = useState(false);

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
    }

    if (hotelLongitude.trim() === "") {
      validationErrors.hotellongitude = "Enter the hotel's longitude";
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
      setRender(true);
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
      </div>
      {errors.hoteladress && (
        <span className='error-creator'>{errors.hoteladress}</span>
      )}

      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelCity'>
          City:
        </label>
        <input
          id='inp2'
          className='HotelCreator__input'
          type='text'
          placeholder='Enter the city'
          name='hotelCity'
          onChange={(event) => handleChange(event)}
          value={hotelCity}
        />
      </div>
      {errors.hotelcity && (
        <span className='error-creator'>{errors.hotelcity}</span>
      )}

      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelState'>
          State:
        </label>
        <input
          id='inp3'
          className='HotelCreator__input'
          type='text'
          placeholder='Enter the state'
          name='hotelState'
          onChange={(event) => handleChange(event)}
          value={hotelState}
        />
      </div>
      {errors.hotelstate && (
        <span className='error-creator'>{errors.hotelstate}</span>
      )}

      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='hotelCountry'>
          Country:
        </label>
        <input
          id='inp4'
          className='HotelCreator__input'
          type='text'
          placeholder="Write your hotel's country"
          name='hotelCountry'
          onChange={(event) => handleChange(event)}
          value={hotelCountry}
        />
      </div>
      {errors.hotelcountry && (
        <span className='error-creator'>{errors.hotelcountry}</span>
      )}

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
      </div>
      {errors.hotellatitude && (
        <span className='error-creator'>{errors.hotellatitude}</span>
      )}

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
      </div>
      {errors.hotellongitude && (
        <span className='error-creator'>{errors.hotellongitude}</span>
      )}

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
        {render === true ? (
          <button
            className='HotelCreator__form--microSubmit'
            onClick={(event) => {
              setFormTab(3);
              scrollToTop();
            }}
          >
            🢂
          </button>
        ) : (
          <button className='HotelCreator__form--microSubmit'>🢂</button>
        )}
      </div>
    </form>
  );
}

export default Form2LocationData;
