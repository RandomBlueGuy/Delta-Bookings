import React, { useState, useEffect } from "react";

function Form3SocialData({
  setFormTab,
  formTab,
  scrollToTop,
  form3Constructor,
  hotel = null,
}) {
  const [info, setInfo] = useState({
    PopularityNumber: "",
    TrendingNumber: "",
    SN_Facebook: "",
    SN_Instagram: "",
    SN_Twitter: "",
    SN_Pinterest: "",
  });

  useEffect(() => {
    if (hotel !== null) {
      setInfo({
        PopularityNumber: `${hotel.PopularityNumber}`,
        TrendingNumber: `${hotel.TrendingNumber}`,
        SN_Facebook: hotel.SN_Facebook,
        SN_Instagram: hotel.SN_Instagram,
        SN_Twitter: hotel.SN_Twitter,
        SN_Pinterest: hotel.SN_Pinterest,
      });
    } 
  }, [hotel]);

  const {
    PopularityNumber,
    TrendingNumber,
    SN_Facebook,
    SN_Instagram,
    SN_Twitter,
    SN_Pinterest,
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

    if (PopularityNumber.trim() === "") {
      validationErrors.PopularityNumber = "No empty spaces";
    }

    if (TrendingNumber.trim() === "") {
      validationErrors.TrendingNumber = "No empty spaces";
    }

    if (SN_Facebook.trim() === "") {
      validationErrors.SN_Facebook = "No empty spaces";
    }

    if (SN_Instagram.trim() === "") {
      validationErrors.SN_Instagram = "No empty spaces";
    }

    if (SN_Twitter.trim() === "") {
      validationErrors.SN_Twitter = "No empty spaces";
    }

    if (SN_Pinterest.trim() === "") {
      validationErrors.SN_Pinterest = "No empty spaces";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors(validationErrors);
      setRender(true);
      setFormTab(4);
      form3Constructor(
        PopularityNumber,
        TrendingNumber,
        SN_Facebook,
        SN_Instagram,
        SN_Twitter,
        SN_Pinterest
      );
    }
  };

  return (
    <form
      action=""
      className="CreateHotel--subHotel CH__form3"
      onSubmit={handleInfo}
    >
      <h2>Social Data</h2>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="PopularityNumber">
            Popularity #:
          </label>
          <input
            id="inp1"
            className="HotelCreator__input"
            type="number"
            placeholder="Write your hotel's popularity number.
          If not, enter NA or related"
            name="PopularityNumber"
            onChange={(event) => handleChange(event)}
            value={PopularityNumber}
          />
        </div>
        {errors.PopularityNumber && (
          <span className="error-creatorAdmin">
            {" "}
            {errors.PopularityNumber}{" "}
          </span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="TrendingNumber">
            Trending #:
          </label>
          <input
            id="inp2"
            className="HotelCreator__input"
            type="number"
            placeholder="Write your hotel's popularity number.
          If not, enter NA or related"
            name="TrendingNumber"
            onChange={(event) => handleChange(event)}
            value={TrendingNumber}
          />
        </div>
        {errors.TrendingNumber && (
          <span className="error-creatorAdmin"> {errors.TrendingNumber} </span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="SN_Facebook">
            Facebook:
          </label>
          <input
            id="inp3"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel's facebook fanpage.
          If not, enter NA or related"
            name="SN_Facebook"
            onChange={(event) => handleChange(event)}
            value={SN_Facebook}
          />
        </div>
        {errors.SN_Facebook && (
          <span className="error-creatorAdmin"> {errors.SN_Facebook} </span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="SN_Instagram">
            Instagram:
          </label>
          <input
            id="inp4"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel's Instagram fanpage.
          If not, enter NA or related"
            name="SN_Instagram"
            onChange={(event) => handleChange(event)}
            value={SN_Instagram}
          />
        </div>
        {errors.SN_Instagram && (
          <span className="error-creatorAdmin"> {errors.SN_Instagram} </span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="SN_Twitter">
            Twitter:
          </label>
          <input
            id="inp5"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel's Twitter page.
          If not, enter NA or related"
            name="SN_Twitter"
            onChange={(event) => handleChange(event)}
            value={SN_Twitter}
          />
        </div>
        {errors.SN_Twitter && (
          <span className="error-creatorAdmin"> {errors.SN_Twitter} </span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="SN_Pinterest">
            Pinterest:
          </label>
          <input
            id="inp5"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel's Pinterest page.
          If not, enter NA or related"
            name="SN_Pinterest"
            onChange={(event) => handleChange(event)}
            value={SN_Pinterest}
          />
        </div>
        {errors.SN_Pinterest && (
          <span className="error-creatorAdmin"> {errors.SN_Pinterest} </span>
        )}
      </div>

      <div className="HotelForm__footer">
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            setFormTab(2);
            scrollToTop();
          }}
        >
          🡸
        </button>
        Step {formTab} / 5
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            scrollToTop();
            handleInfo(event);
          }}
        >
          🢂
        </button>
      </div>
    </form>
  );
}

export default Form3SocialData;
