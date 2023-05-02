import React, { useState, useEffect } from "react";

function Form2LocationData({
  setFormTab,
  formTab,
  scrollToTop,
  form2Constructor,
  hotel = null,
}) {
  const [errors, setErrors] = useState({});
  const [render, setRender] = useState(false);

  const [info, setInfo] = useState({
    loc_Place: "",
    loc_City: "",
    loc_State: "",
    loc_Country: "",
    loc_Lat: "",
    loc_Lng: "",
  });

  useEffect(() => {
    if (hotel !== null) {
      setInfo({
        loc_Place: hotel.loc_Place,
        loc_City: hotel.loc_City,
        loc_State: hotel.loc_State,
        loc_Country: hotel.loc_Country,
        loc_Lat: hotel.loc_Lat,
        loc_Lng: hotel.loc_Lng,
      });
    }
  }, [hotel]);

  const { loc_Place, loc_City, loc_State, loc_Country, loc_Lat, loc_Lng } =
    info;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (loc_Place.trim() === "") {
      validationErrors.loc_Place = "Enter the hotel's adress";
    }

    if (loc_State.trim() === "") {
      validationErrors.loc_State = "Enter the hotel's state";
    } else if (!/^[a-zA-Z]+$/.test(loc_State.trim().replace(/\s+/g, ""))) {
      validationErrors.loc_State =
        "Hotel's state name must only contain letters";
    }

    if (loc_Country.trim() === "") {
      validationErrors.loc_Country = "Enter the hotel's country";
    } else if (!/^[a-zA-Z]+$/.test(loc_Country.trim().replace(/\s+/g, ""))) {
      validationErrors.loc_Country =
        "Hotel's country name must only contain letters";
    }

    if (loc_City.trim() === "") {
      validationErrors.loc_City = "Enter the hotel's city";
    } else if (!/^[a-zA-Z]+$/.test(loc_City.trim().replace(/\s+/g, ""))) {
      validationErrors.loc_City = "Hotel's City name must only contain letters";
    }

    if (loc_Country.trim() === "") {
      validationErrors.loc_Country = "Enter the hotel's country";
    } else if (!/^[a-zA-Z]+$/.test(loc_Country.trim().replace(/\s+/g, ""))) {
      validationErrors.loc_Country =
        "Hotel's country name must only contain letters";
    }

    if (loc_Lat.trim() === "") {
      validationErrors.loc_Lat = "Enter the hotel's latitude";
    }

    if (loc_Lng.trim() === "") {
      validationErrors.loc_Lng = "Enter the hotel's longitude";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setRender(true);
      setFormTab(3);
      form2Constructor(
        loc_Place,
        loc_City,
        loc_State,
        loc_Country,
        loc_Lat,
        loc_Lng
      );
    }
  };

  return (
    <form
      action=""
      onSubmit={handleInfo}
      className="CreateHotel--subHotel CH__form2"
    >
      <h2>Location data</h2>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="loc_Place">
            Address:
          </label>
          <input
            id="inp1"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel address"
            name="loc_Place"
            onChange={(event) => handleChange(event)}
            value={loc_Place}
          />
        </div>
        {errors.loc_Place && (
          <span className="error-creatorAdmin">{errors.loc_Place}</span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="loc_City">
            City:
          </label>
          <input
            id="inp2"
            className="HotelCreator__input"
            type="text"
            placeholder="Enter the city"
            name="loc_City"
            onChange={(event) => handleChange(event)}
            value={loc_City}
          />
        </div>
        {errors.loc_City && (
          <span className="error-creatorAdmin">{errors.loc_City}</span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="loc_State">
            State:
          </label>
          <input
            id="inp3"
            className="HotelCreator__input"
            type="text"
            placeholder="Enter the state"
            name="loc_State"
            onChange={(event) => handleChange(event)}
            value={loc_State}
          />
        </div>
        {errors.loc_State && (
          <span className="error-creatorAdmin">{errors.loc_State}</span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="loc_Country">
            Country:
          </label>
          <input
            id="inp4"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel's country"
            name="loc_Country"
            onChange={(event) => handleChange(event)}
            value={loc_Country}
          />
        </div>
        {errors.loc_Country && (
          <span className="error-creatorAdmin">{errors.loc_Country}</span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="loc_Lat">
            Latitude:
          </label>
          <input
            id="inp5"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel's latitude"
            name="loc_Lat"
            onChange={(event) => handleChange(event)}
            value={loc_Lat}
          />
        </div>
        {errors.loc_Lat && (
          <span className="error-creatorAdmin">{errors.loc_Lat}</span>
        )}
      </div>

      <div className="line_Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="loc_Lng">
            Longitude:
          </label>
          <input
            id="inp5"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel's Longitude"
            name="loc_Lng"
            onChange={(event) => handleChange(event)}
            value={loc_Lng}
          />
        </div>
        {errors.loc_Lng && (
          <span className="error-creatorAdmin">{errors.loc_Lng}</span>
        )}
      </div>

      <div className="HotelForm__footer">
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            setFormTab(1);
            scrollToTop();
            handleInfo(event);
          }}
        >
          🡸
        </button>
        Step {formTab} / 5
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
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
