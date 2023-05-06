import React, { useState, useEffect } from "react";
import axios from "axios";
import FloatingMessage from "../UniversalComponents/FloatingMessage";

function Form4Gallery({
  setFormTab,
  formTab,
  scrollToTop,
  form4Constructor,
  hotel = null,
}) {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [files, setFiles] = useState("");
  const [errors, setErrors] = useState({});
  const [render, setRender] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (hotel !== null) {
      setFiles(hotel.Gallery);
    }
  }, [hotel]);

  const handleFile = (event) => {
    const fileList = event.target.files;
    const filesArray = Array.from(fileList);
    setFiles(filesArray);
    setMessage(`${filesArray.length} images have been uploaded`);
    setShowUpdate(true);
  };

  const handleInfo = async (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (hotel !== null) {
      if (files.length <= 1) {
        validationErrors.filesempty = "Please add, at least, one file";
        setErrors(validationErrors);
      }
    }

    if (Object.keys(validationErrors).length === 0) {
      if (typeof files !== "string") {
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
          data.append(`file:${i}`, files[i], files[i].name);
        }

        const response = await axios.post(`${DB_URL}/test-formdata`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setRender(true);
        const Gallery = Object.values(response.data).join("-//-");
        form4Constructor(Gallery);
      } else {
        form4Constructor(hotel.Gallery);
      }
      setFormTab(5);
    }
  };

  return (
    <form
      action=""
      onSubmit={handleInfo}
      className="CreateHotel--subHotel CH__form4"
    >
      {showUpdate && (
        <FloatingMessage
          message={`Images uploaded`}
          setShowUpdate={setShowUpdate}
          showUpdate={showUpdate}
        />
      )}
      <div className="line_Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="inpGallery">
            Add images:
          </label>
          <input
            id="inpGallery"
            type="file"
            name="hotelFront"
            accept="image/png, image/jpeg, image/jpg"
            multiple
            onChange={(event) => handleFile(event)}
            style={{border: "none"}}
          />
        </div>
        {errors.filesempty && (
          <h1 className="error-creatorAdmin">{errors.filesempty}</h1>
        )}
      </div>

      <div className="HotelForm__footer">
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
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
            handleInfo(event);
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
