import React, { useState } from "react";

function Form5RoomForm({ setRoomFormArr, roomFormArr }) {
  const [status, setStatus] = useState(false);
  
  return (
    <>
      <div className="dividing-ctn">
        <div className="dividing-line"></div>
      </div>
      <form action="" className="CreateHotel--subHotel Ctn__Form5">
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
          <label className="HotelCreator__label" htmlFor="inp1">
            Room name:
          </label>
          <input
            id="inp1"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your new Room Name"
          />
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="inp2">
            Add Amenities:
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
            Add Inclusions:
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
            Room's Price:
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
            Room's discount:
          </label>
          <input
            id="inp5"
            className="HotelCreator__input"
            type="text"
            placeholder="Write your new hotel description"
          />
        </div>
        <div className="HotelCreator__form--line">
          <label className="HotelCreator__label" htmlFor="inp5">
            Room's description:
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
            Add Room Image:
          </label>
          <button className="HotelCreator__form--microSubmit">
            Load image
          </button>
        </div>
        <div className="addRoom">
          <button>Create Room 🞧</button>
        </div>
      </form>
    </>
  );
}

export default Form5RoomForm;
