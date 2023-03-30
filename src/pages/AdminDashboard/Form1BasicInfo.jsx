import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

function Form1BasicInfo({ setFormTab, formTab, scrollToTop }) {
  return (
    <form action="" className="CreateHotel--subHotel CH__form1">
      <h2>Basic information</h2>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp1">
          Name:
        </label>
        <input
          id="inp1"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your new hotel Name"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp2">
          Website:
        </label>
        <input
          id="inp2"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel site (no spaces /)"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp3">
          Phone number:
        </label>
        <input
          id="inp3"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your new hotel phone number (only numbers)"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp4">
          Email:
        </label>
        <input
          id="inp4"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your new hotel email address"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp5">
          Description:
        </label>
        <input
          id="inp5"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your new hotel description"
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp6">
          Front image
        </label>
        <button className="HotelCreator__form--microSubmit">Load image</button>
      </div>

      <div className="HotelForm__footer">
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            event.preventDefault();
          }}
          style={{ opacity: "0" }}
        >
          🡸
        </button>
        Step {formTab} / 5
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            event.preventDefault();
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
