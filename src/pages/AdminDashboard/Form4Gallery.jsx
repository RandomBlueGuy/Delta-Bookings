import React, { useState } from "react";
import axios from "axios";

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

    if (files.length <= 1) {
      validationErrors.filesempty = "Please add, at least, one file";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("image", files[i]);
      }
      try {
        const response = axios.post(
          "http://localhost:8080/test-formdata",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        setRender(true);
      } catch (error) {
        console.log(error);
      }
    }
    setFiles([]);
  };

  return (
    <form
      action=''
      onSubmit={handleInfo}
      className='CreateHotel--subHotel CH__form4'
    >
      <div className='line_Ctn'>
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
          <span className='error-creatorAdmin'>{errors.filesempty}</span>
        )}
      </div>

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
