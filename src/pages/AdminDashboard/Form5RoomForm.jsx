import React, { useState, useEffect } from "react";
import axios from "axios";

function Form5RoomForm({
  length = 1,
  form5Constructor,
  roomInfo = null,
  isItUpdating = false,
}) {
  const [status, setStatus] = useState(false);
  const [changeRoomData, setChangeRoomData] = useState(false);

  const [info, setInfo] = useState({
    RoomImg: "",
    RoomName: "",
    OriginalPricePerNight: "",
    Discount: "",
    About: "",
    Amenities: "",
    Inclusions: "",
  });

  useEffect(() => {
    if (roomInfo !== null) {
      setInfo({
        RoomImg: roomInfo.RoomImg,
        RoomName: roomInfo.RoomName,
        OriginalPricePerNight: roomInfo.OriginalPricePerNight,
        Discount: roomInfo.Discount,
        About: roomInfo.About,
        Amenities: roomInfo.Amenities,
        Inclusions: roomInfo.Inclusions,
      });
    }
  }, [roomInfo]);

  const {
    RoomImg,
    RoomName,
    OriginalPricePerNight,
    Discount,
    About,
    Amenities,
    Inclusions,
  } = info;

  const DB_URL = process.env.REACT_APP_BACKEND_URL;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value =
      target.type === "file" ? Array.from(target.files) : target.value;
    const name = target.name;

    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (
      RoomName !== "" ||
      Amenities !== "" ||
      Inclusions !== "" ||
      OriginalPricePerNight !== "" ||
      Discount !== "" ||
      About !== "" ||
      RoomImg.length !== 0
    ) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  const handleInfo = async (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (RoomName.trim() === "") {
      validationErrors.RoomName = "Enter your room's name";
    }

    if (Amenities.trim() === "") {
      validationErrors.Amenities = "Enter your amenities";
    }
    if (Inclusions.trim() === "") {
      validationErrors.Inclusions = "Enter your inclusions";
    }

    if (About.trim() === "") {
      validationErrors.About = "enter your room's description";
    }

    if (RoomImg.length < 1) {
      validationErrors.RoomImg = "Please upload, at least, one picture";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const data = new FormData();
      data.append("HotelFront", RoomImg);
      let roomURL = "";

      for (let i = 0; i < RoomImg.length; i++) {
        data.append(`file ${i}`, RoomImg[i], RoomImg[i].name);
      }
      const response = await axios.post(`${DB_URL}/test-formdata`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      roomURL = response.data["file 0"];
      const roomAmenities = `${Amenities.split(" ")[0]}-/-${
        Amenities.split(" ")[1]
      }`;
      const roomInclusions = `${Inclusions.split(" ")[0]}-/-${
        Inclusions.split(" ")[1]
      }`;
      if (isItUpdating === false) {
        form5Constructor(
          roomURL,
          RoomName,
          OriginalPricePerNight,
          Discount,
          About,
          roomAmenities,
          roomInclusions
        );
      } else {
        if (roomURL === "") {
          roomURL = roomInfo.RoomImg;
        }

        const roomAmenities = Amenities.split(" ").join("-/-");
        const roomInclusions = Inclusions.split(" ").join("-/-");
        console.log(roomAmenities);
        setChangeRoomData(true);
        form5Constructor(
          roomURL,
          RoomName,
          OriginalPricePerNight,
          Discount,
          About,
          roomAmenities,
          roomInclusions,
          isItUpdating,
          roomInfo.id
        );
      }
    }
  };

  return (
    <>
      <div className='dividing-ctn'>
        <div className='dividing-line'></div>
      </div>
      <form
        onSubmit={handleInfo}
        action=''
        className='CreateHotel--subHotel Ctn__Form5'
      >
        <div className='RoomCreator__header'>
          <h3>Room creator</h3>
          <div>
            <button
              className='manage__del'
              onClick={(event) => {
                event.preventDefault();
                setInfo({
                  RoomImg: "",
                  RoomName: "",
                  OriginalPricePerNight: "",
                  Discount: "",
                  About: "",
                  Amenities: "",
                  Inclusions: "",
                });
              }}
            >
              Clear
            </button>
          </div>
        </div>

        <div className='line_Ctn'>
          <div className='HotelCreator__form--line'>
            <label className='HotelCreator__label' htmlFor='RoomName'>
              Room name:
            </label>
            <input
              id='inp1'
              className='HotelCreator__input'
              type='text'
              placeholder="Write your room's Name"
              name='RoomName'
              onChange={handleChange}
              value={RoomName}
            />
          </div>
          {errors.RoomName && (
            <span className='error-creatorAdmin'> {errors.RoomName} </span>
          )}
        </div>

        <div className='line_Ctn'>
          <div className='HotelCreator__form--line'>
            <label className='HotelCreator__label' htmlFor='roonAmenities'>
              Add Amenities:
            </label>
            <input
              id='inp2'
              className='HotelCreator__input'
              type='text'
              placeholder="Write your room's amenities (at least 2 use commas)"
              name='Amenities'
              onChange={handleChange}
              value={Amenities}
            />
          </div>
          {errors.Amenities && (
            <span className='error-creatorAdmin'> {errors.Amenities} </span>
          )}
        </div>

        <div className='line_Ctn'>
          <div className='HotelCreator__form--line'>
            <label className='HotelCreator__label' htmlFor='Inclusions'>
              Add Inclusions:
            </label>
            <input
              id='inp3'
              className='HotelCreator__input'
              type='text'
              placeholder="Write your room's Inclusions (at least 2 use commas)"
              name='Inclusions'
              onChange={handleChange}
              value={Inclusions}
            />
          </div>
          {errors.Inclusions && (
            <span className='error-creatorAdmin'> {errors.Inclusions} </span>
          )}
        </div>

        <div className='line_Ctn'>
          <div className='HotelCreator__form--line'>
            <label
              className='HotelCreator__label'
              htmlFor='OriginalPricePerNight'
            >
              Room's Price:
            </label>
            <input
              id='inp4'
              className='HotelCreator__input'
              type='number'
              placeholder="Write your room's price"
              name='OriginalPricePerNight'
              onChange={handleChange}
              value={OriginalPricePerNight}
            />
          </div>
          {errors.OriginalPricePerNight && (
            <span className='error-creatorAdmin'>
              {" "}
              {errors.OriginalPricePerNight}{" "}
            </span>
          )}
        </div>

        <div className='line_Ctn'>
          <div className='HotelCreator__form--line'>
            <label className='HotelCreator__label' htmlFor='Discount'>
              Room's discount:
            </label>
            <input
              id='inp5'
              className='HotelCreator__input'
              type='number'
              placeholder="Write your room's discount"
              name='Discount'
              onChange={handleChange}
              value={Discount}
            />
          </div>
          {errors.Discount && (
            <span className='error-creatorAdmin'> {errors.Discount} </span>
          )}
        </div>

        <div className='line_Ctn'>
          <div className='HotelCreator__form--line'>
            <label className='HotelCreator__label' htmlFor='About'>
              Room's description:
            </label>
            <input
              id='inp5'
              className='HotelCreator__input'
              type='text'
              placeholder="Write your room'sgi description"
              name='About'
              onChange={handleChange}
              value={About}
            />
          </div>
          {errors.About && (
            <span className='error-creatorAdmin'> {errors.About} </span>
          )}
        </div>

        <div className='line_Ctn'>
          <div className='HotelCreator__form--line'>
            <label className='HotelCreator__label' htmlFor='RoomImg'>
              Add Room Image:
            </label>
            <input
              className='HotelCreator__input'
              type='file'
              name='RoomImg'
              accept='image/png, image/jpeg, image/jpg'
              multiple
              onChange={handleChange}
            />
          </div>
          {errors.RoomImg && (
            <span className='error-creatorAdmin'> {errors.RoomImg} </span>
          )}
        </div>

        <div className='addRoom'>
          <button style={{ display: roomInfo === null ? "block" : "none" }}>
            Create Room 🞧
          </button>
          <button style={{ display: roomInfo !== null ? "block" : "none" }}>
            Update Room 🞧
          </button>
        </div>
      </form>
    </>
  );
}

export default Form5RoomForm;
