import React, { useState } from "react";

function Form3SocialData({ setFormTab, formTab, scrollToTop }) {
  const [info, setInfo] = useState({
    hotelPopularity: "",
    hotelTrending: "",
    hotelFacebook: "",
    hotelInstagram: "",
    hotelTwitter: "",
    hotelPinterest: "",
  });

  const {
    hotelPopularity,
    hotelTrending,
    hotelFacebook,
    hotelInstagram,
    hotelTwitter,
    hotelPinterest,
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

    if (hotelPopularity.trim() === "") {
      validationErrors.hotelpopularity = "No empty spaces";
    }

    if (hotelTrending.trim() === "") {
      validationErrors.hoteltrending = "No empty spaces";
    }

    if (hotelFacebook.trim() === "") {
      validationErrors.hotelfacebook = "No empty spaces";
    }

    if (hotelInstagram.trim() === "") {
      validationErrors.hotelinstagram = "No empty spaces";
    }

    if (hotelTwitter.trim() === "") {
      validationErrors.hoteltwitter = "No empty spaces";
    }

    if (hotelPinterest.trim() === "") {
      validationErrors.hotelpinterest = "No empty spaces";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors(validationErrors);
      setRender(true);
    }
  };

  return (
    <form
      action=''
      className='CreateHotel--subHotel CH__form3'
      onSubmit={handleInfo}
    >
      <h2>Social Data</h2>

      <div className='line__Ctn'>
        <div className='HotelCreator__form--line'>
          <label className='HotelCreator__label' htmlFor='hotelPopularity'>
            Popularity #:
          </label>
          <input
            id='inp1'
            className='HotelCreator__input'
            type='text'
            placeholder="Write your hotel's popularity number.
          If not, enter NA or related"
            name='hotelPopularity'
            onChange={(event) => handleChange(event)}
            value={hotelPopularity}
          />
        </div>
        {errors.hotelpopularity && (
          <span className='error-creatorAdmin'> {errors.hotelpopularity} </span>
        )}
      </div>

      <div className='line__Ctn'>
        <div className='HotelCreator__form--line'>
          <label className='HotelCreator__label' htmlFor='hotelTrending'>
            Trending #:
          </label>
          <input
            id='inp2'
            className='HotelCreator__input'
            type='text'
            placeholder="Write your hotel's popularity number.
          If not, enter NA or related"
            name='hotelTrending'
            onChange={(event) => handleChange(event)}
            value={hotelTrending}
          />
        </div>
        {errors.hoteltrending && (
          <span className='error-creatorAdmin'> {errors.hoteltrending} </span>
        )}
      </div>

      <div className='line__Ctn'>
        <div className='HotelCreator__form--line'>
          <label className='HotelCreator__label' htmlFor='hotelFacebook'>
            Facebook:
          </label>
          <input
            id='inp3'
            className='HotelCreator__input'
            type='text'
            placeholder="Write your hotel's facebook fanpage.
          If not, enter NA or related"
            name='hotelFacebook'
            onChange={(event) => handleChange(event)}
            value={hotelFacebook}
          />
        </div>
        {errors.hotelfacebook && (
          <span className='error-creatorAdmin'> {errors.hotelfacebook} </span>
        )}
      </div>

      <div className='line__Ctn'>
        <div className='HotelCreator__form--line'>
          <label className='HotelCreator__label' htmlFor='hotelInstagram'>
            Instagram:
          </label>
          <input
            id='inp4'
            className='HotelCreator__input'
            type='text'
            placeholder="Write your hotel's Instagram fanpage.
          If not, enter NA or related"
            name='hotelInstagram'
            onChange={(event) => handleChange(event)}
            value={hotelInstagram}
          />
        </div>
        {errors.hotelinstagram && (
          <span className='error-creatorAdmin'> {errors.hotelinstagram} </span>
        )}
      </div>

      <div className='line__Ctn'>
        <div className='HotelCreator__form--line'>
          <label className='HotelCreator__label' htmlFor='hotelTwitter'>
            Twitter:
          </label>
          <input
            id='inp5'
            className='HotelCreator__input'
            type='text'
            placeholder="Write your hotel's Twitter page.
          If not, enter NA or related"
            name='hotelTwitter'
            onChange={(event) => handleChange(event)}
            value={hotelTwitter}
          />
        </div>
        {errors.hoteltwitter && (
          <span className='error-creatorAdmin'> {errors.hoteltwitter} </span>
        )}
      </div>

      <div className='line__Ctn'>
        <div className='HotelCreator__form--line'>
          <label className='HotelCreator__label' htmlFor='hotelPinterest'>
            Pinterest:
          </label>
          <input
            id='inp5'
            className='HotelCreator__input'
            type='text'
            placeholder="Write your hotel's Pinterest page.
          If not, enter NA or related"
            name='hotelPinterest'
            onChange={(event) => handleChange(event)}
            value={hotelPinterest}
          />
        </div>
        {errors.hotelpinterest && (
          <span className='error-creatorAdmin'> {errors.hotelpinterest} </span>
        )}
      </div>

      <div className='HotelForm__footer'>
        <button
          className='HotelCreator__form--microSubmit'
          onClick={(event) => {
            setFormTab(2);
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
              setFormTab(4);
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

export default Form3SocialData;
