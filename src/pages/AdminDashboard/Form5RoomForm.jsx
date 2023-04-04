import React, { useState } from "react";

function Form5RoomForm({ setRoomFormArr, roomFormArr }) {
  const [status, setStatus] = useState(false);
  const [info, setInfo]= useState({
   roomName: "",
   roomAmenities:"",
   roomInclusions:"",
   roomPrice:"",
   roomDiscount:"",
   roomDescription:"",
   roomImages: [],
  })

const {
  roomName,
  roomAmenities,
  roomInclusions,
  roomPrice,
  roomDiscount,
  roomDescription,
  roomImages
  }= info

  const [errors, setErrors]= useState({})

  const handleChange = (event) => {
    const target= event.target
    const value= target.type==='file' ? Array.from(target.files): target.value;
    const name= target.name
    
  setInfo(prevState=> ({
    ...prevState,
    [name]:value
  }))
  };

  const handleInfo =(event) =>{
    event.preventDefault();
    const validationErrors={}

    if (roomName.trim()===""){
      validationErrors.roomname= "Enter your room's name"
    }

    if (roomAmenities.trim()===""){
      validationErrors.roomamenities="Enter your amenities"
    }
    if (roomInclusions.trim()===""){
      validationErrors.roominclusions="Enter your inclusions"
    }
    
    if(roomPrice===""){
      validationErrors.roomprice="Enter the room's price"
    } else if(!/^[0-9]*$/.test(roomPrice.trim().replace(/\s+/g, ""))){
      validationErrors.roomprice= "Only numeric characters"
    }

    if(roomDiscount===""){
      validationErrors.roomdiscount="Enter the room's discount"
    } else if(!/^[0-9]*$/.test(roomDiscount.trim().replace(/\s+/g, ""))){
      validationErrors.roomdiscount= "Only numeric characters"
    }

    if (roomDescription.trim() === "") {
      validationErrors.roomdescription = "enter your room's description";
    } else if (roomDescription.replace(/\s+/g, "").length > 100) {
      validationErrors.hoteldescription =
        "Please give us a shorter description";
    }

    if(roomImages.length<1){
      validationErrors.roomimages= "Please upload, at least, one picture"
    }
    setErrors(validationErrors)

    if(Object.keys(validationErrors).length===0){
      setInfo({
      roomName:"",
      roomAmenities:"",
      roomInclusions:"",
      roomPrice:"",
      roomDiscount:"",
      roomDescription:"",
      roomImages: [],
      })
      setErrors({})
    }
  }
  
  return (
    <>
      <div className="dividing-ctn">
        <div className="dividing-line"></div>
      </div>
      <form onSubmit={handleInfo} action="" className="CreateHotel--subHotel Ctn__Form5">
        <div className="RoomCreator__header">
          <h3>Room [#]</h3>
          <div>
            <button
              className="manage__status"
              disabled
              style={{
                backgroundColor: !status
                  ? "rgb(204, 197, 8)"
                  : "rgb(8, 204, 106)",
              }}
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              {!status ? "Not Complete ◉" : "Completed ✔"}
            </button>
            <button
              className="manage__del"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Delete 🞮
            </button>
          </div>
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="roomName">
            Room name:
          </label>
          <input
            id="inp1"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your new Room Name"
            name='roomName'
            onChange={(event) => handleChange(event)}
            value={roomName}
          />
          {errors.roomname && <span> {errors.roomname} </span>}
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="roonAmenities">
            Add Amenities:
          </label>
          <input
            id="inp2"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel amenity or amenities (use comas)"
            name='roomAmenities'
            onChange={(event) => handleChange(event)}
            value={roomAmenities}
          />
          {errors.roomamenities && <span> {errors.roomamenities} </span>}
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="roomInclusions">
            Add Inclusions:
          </label>
          <input
            id="inp3"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your hotel inclusion or inclusions (use comas)"
            name='roomInclusions'
            onChange={(event) => handleChange(event)}
            value={roomInclusions}
          />
          {errors.roominclusions && <span> {errors.roominclusions} </span>}
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="roomPrice">
            Room's Price:
          </label>
          <input
            id="inp4"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your room's price"
            name='roomPrice'
            onChange={(event) => handleChange(event)}
            value={roomPrice}
          />
          {errors.roomprice && <span> {errors.roomprice} </span>}
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="roomDiscount">
            Room's discount:
          </label>
          <input
            id="inp5"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your new hotel description"
            name='roomDiscount'
            onChange={(event) => handleChange(event)}
            value={roomDiscount}
          />
          {errors.roomdiscount && <span> {errors.roomdiscount} </span>}
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="roomDescription">
            Room's description:
          </label>
          <input
            id="inp5"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your new hotel description"
            name='roomDescription'
            onChange={(event) => handleChange(event)}
            value={roomDescription}
          />
          {errors.roomdescription && <span> {errors.roomdescription} </span>}
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="roomImages">
            Add Room Image:
          </label>
          <input
          type='file'
          name='roomImages'
          accept='image/png, image/jpeg, image/jpg'
          multiple
          onChange={(event) => handleChange(event)}
        />
        {errors.roomimages && <span> {errors.roomimages} </span>}
        </div>
        <div className="addRoom">
          <button>Create Room 🞧</button>
        </div>
      </form>
    </>
  );
}

export default Form5RoomForm;
