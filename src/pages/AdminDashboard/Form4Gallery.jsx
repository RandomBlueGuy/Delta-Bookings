import React, { useState } from "react";

function Form4Gallery({ setFormTab, formTab, scrollToTop }) {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [render, setRender] = useState(false);

  const handleFile = (event) => {
    const fileList = event.target.files;
    const filesArray = Array.from(fileList);
    setFiles(filesArray);
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (files.length < 1) {
      validationErrors.filesempty = "Please add, at least, one file";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setFiles([]);
      setErrors({});
      setRender(true);
    }
  };

  return (
    <form
      action=''
      onSubmit={handleInfo}
      className='CreateHotel--subHotel CH__form4'
    >
      <div className='HotelCreator__form--line'>
        <label className='HotelCreator__label' htmlFor='inp6'>
          Add new images:
        </label>
        <input
          type='file'
          name='hotelFront'
          accept='image/png, image/jpeg, image/jpg'
          multiple
          onChange={(event) => handleFile(event)}
        />
      </div>
      {errors.filesempty && (
        <span className='error-creator'>{errors.filesempty}</span>
      )}

      <div className='HotelForm__footer'>
        <button
          className='HotelCreator__form--microSubmit'
          onClick={(event) => {
            setFormTab(3);
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
              setFormTab(5);
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

export default Form4Gallery;
