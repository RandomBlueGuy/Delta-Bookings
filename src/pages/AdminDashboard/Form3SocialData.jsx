import React from "react";

function Form3SocialData({setFormTab, formTab, scrollToTop}) {
  return (
    <form
      action=""
      className="CreateHotel--subHotel CH__form3"
    >
      <h2>Social Data</h2>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp1">
          Popularity #:
        </label>
        <input
          id="inp1"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's popularity number"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp2">
          Trending #:
        </label>
        <input
          id="inp2"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's popularity number"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp3">
          Facebook:
        </label>
        <input
          id="inp3"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's facebook fanpage"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp4">
          Instagram:
        </label>
        <input
          id="inp4"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's Instagram fanpage"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp5">
          Twitter:
        </label>
        <input
          id="inp5"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's Twitter page"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp5">
          Pinterest:
        </label>
        <input
          id="inp5"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's Pinterest page"
        />
      </div>

      <div className="HotelForm__footer">
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            event.preventDefault();
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
            event.preventDefault();
            setFormTab(4);
            scrollToTop();
          }}
        >
          🢂
        </button>
      </div>
    </form>
  );
}

export default Form3SocialData;
