import React from "react";

function Form4Gallery({setFormTab, formTab, scrollToTop}) {
  return (
    <form action="" className="CreateHotel--subHotel CH__form4">
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="inp6">
          Add new images:
        </label>
        <button className="HotelCreator__form--microSubmit">Load image</button>
      </div>
      <div className="HotelForm__footer">
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            event.preventDefault();
            setFormTab(3);
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
            setFormTab(5);
            scrollToTop();
          }}
        >
          🢂
        </button>
      </div>
    </form>
  );
}

export default Form4Gallery;
