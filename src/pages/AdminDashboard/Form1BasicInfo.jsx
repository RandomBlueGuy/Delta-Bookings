import React, { useState, useEffect } from "react";
import axios from "axios";
import FloatingMessage from "../UniversalComponents/FloatingMessage";

function Form1BasicInfo({
  setFormTab,
  formTab,
  scrollToTop,
  form1Constructor,
  hotel = null,
}) {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  
  const [info, setInfo] = useState({});
  const [tagsArr, setTagsArr] = useState({ tag1: "Swimming", tag2: "Parking" });
  
  useEffect(() => {
    if (hotel === null) {
      setInfo({
        HotelName: "",
        Website: "",
        PhoneNumber: "",
        Email: "",
        HotelDescription: "",
        FrontImg: [],
        Tags: "",
      });
    } else {
      setInfo({
        HotelName: hotel.HotelName,
        Website: hotel.Website,
        PhoneNumber: hotel.PhoneNumber.split(" ").join(""),
        Email: hotel.Email,
        HotelDescription: hotel.HotelDescription,
        FrontImg: [],
        Tags: hotel.Tags,
      });
    }
  }, [hotel]);

  const {
    HotelName,
    Website,
    PhoneNumber,
    Email,
    HotelDescription,
    FrontImg,
  } = info;

  const [errors, setErrors] = useState({});
  const [render, setRender] = useState(false);
  const [image, setImage] = useState(null);
  const webRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
  const [showUpdate, setShowUpdate] = useState(false);
  const readFile = (FrontImg) => {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(FrontImg);
  };

  const handleChange = (event) => {
    const target = event.target;
    const value =
      target.type === "file" ? Array.from(target.files) : target.value;
    const name = target.name;

    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    readFile(event.target.files[0]);
    setShowUpdate(true)
  };

  const handleInfo = async (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (!HotelName.trim()) {
      validationErrors.HotelName = "Enter the name of the hotel";
    }

    if (!Website.trim()) {
      validationErrors.Website = "Enter your website";
    } else if (!webRegex.test(Website.trim().replace(/\s+/g, ""))) {
      validationErrors.Website = "Invalid Website";
    }

    if (!PhoneNumber.trim()) {
      validationErrors.PhoneNumber = "Please enter the hotel's number";
    } else if (!/^[0-9]*$/.test(PhoneNumber.trim().replace(/\s+/g, ""))) {
      validationErrors.PhoneNumber = "Only numbers are valid";
    } else if (PhoneNumber.trim().replace(/\s+/g, "").length < 5) {
      validationErrors.PhoneNumber = "Enter a number long enough to be valid";
    }

    if (!Email.trim()) {
      validationErrors.Email = "Please enter the hotel's email";
    }

    if (!HotelDescription.trim()) {
      validationErrors.HotelDescription = "Enter your hotel's description";
    }

    if (hotel === null) {
      if (FrontImg.length < 1) {
        validationErrors.FrontImg = "Please upload, at least, one picture";
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const data = new FormData();
      data.append("HotelName", HotelName);
      for (let i = 0; i < FrontImg.length; i++) {
        data.append(`file ${i}`, FrontImg[i], FrontImg[i].name);
      }

      const response = await axios.post(`${DB_URL}/test-formdata`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const fileURLs = Object.values(response.data);
      const newURL = response.data["file 0"];
      let tagRes = `${tagsArr.tag1}-/-${tagsArr.tag2}`;

      form1Constructor(
        HotelName,
        Website,
        PhoneNumber,
        Email,
        HotelDescription,
        newURL,
        tagRes
      );

      setErrors({});
      setRender(true);
      setFormTab(2);
    }
  };

  return (
    <form
      action=""
      className="CreateHotel--subHotel CH__form1"
      onSubmit={handleInfo}
    >
      {showUpdate && (
        <FloatingMessage
          message={`Image uploaded`}
          setShowUpdate={setShowUpdate}
          showUpdate={showUpdate}
        />
      )}
      <h2>Basic information</h2>
      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="inp__HotelName">
            Name:
          </label>
          <input
            name="HotelName"
            id="inp__HotelName"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your new hotel Name"
            onChange={(event) => handleChange(event)}
            value={HotelName}
          />
        </div>
        {errors.HotelName && (
          <span className="error-creatorAdmin"> {errors.HotelName} </span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="inp__Website">
            Website:
          </label>
          <input
            id="inp__Website"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel site (no spaces /)"
            name="Website"
            onChange={(event) => handleChange(event)}
            value={Website}
          />
        </div>
        {errors.Website && (
          <span className="error-creatorAdmin"> {errors.Website} </span>
        )}
      </div>
      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="inp__PhoneNumber">
            Phone number:
          </label>
          <input
            id="inp__PhoneNumber"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your new hotel phone number (only numbers)"
            name="PhoneNumber"
            onChange={(event) => handleChange(event)}
            value={PhoneNumber}
          />
        </div>
        {errors.PhoneNumber && (
          <span className="error-creatorAdmin"> {errors.PhoneNumber} </span>
        )}
      </div>
      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="Email">
            Email:
          </label>
          <input
            id="inp4"
            className="HotelCreator__input"
            type="email"
            placeholder="Write your new hotel email address"
            name="Email"
            onChange={(event) => handleChange(event)}
            value={Email}
          />
        </div>
        {errors.Email && (
          <span className="error-creatorAdmin"> {errors.Email} </span>
        )}
      </div>
      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="HotelDescription">
            Description:
          </label>
          <input
            id="inp5"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your new hotel description"
            name="HotelDescription"
            onChange={(event) => handleChange(event)}
            value={HotelDescription}
          />
        </div>
        {errors.HotelDescription && (
          <span className="error-creatorAdmin">
            {" "}
            {errors.HotelDescription}{" "}
          </span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="tags">
            Tags:
          </label>
          <select
            value={tagsArr.tag1}
            onChange={(event) =>
              setTagsArr({ ...tagsArr, tag1: event.target.value })
            }
            id="tag-selector"
          >
            <option disabled selected>
              - Select Tag -
            </option>
            <option value="Swimming">Swimming</option>
            <option value="Parking">Parking</option>
            <option value="Helicopter">Helicopter</option>
            <option value="Bar">Bar</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
          </select>

          <select
            value={tagsArr.tag2}
            onChange={(event) =>
              setTagsArr({ ...tagsArr, tag2: event.target.value })
            }
            id="tag-selector2"
          >
            <option disabled selected>
              - Select Tag -
            </option>
            <option value="Swimming">Swimming</option>
            <option value="Parking">Parking</option>
            <option value="Helicopter">Helicopter</option>
            <option value="Bar">Bar</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        {errors.HotelDescription && (
          <span className="error-creatorAdmin">
            {" "}
            {errors.HotelDescription}{" "}
          </span>
        )}
      </div>

      <div className="line__Ctn">
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="FrontImg">
            Front image:
          </label>
          <label htmlFor="Input__file" className="HotelCreator__label--insert">
            INSERT IMAGE
          </label>
          <input
            id="Input__file"
            className="Input__file"
            type="file"
            name="FrontImg"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(event) => handleChange(event)}
            style={{ display: "none" }}
          />
        </div>
        {errors.FrontImg && (
          <span className="error-creatorAdmin"> {errors.FrontImg} </span>
        )}
      </div>

      <div className="HotelForm__footer">
        <button
          type="submit"
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
          type="submit"
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

export default Form1BasicInfo;
