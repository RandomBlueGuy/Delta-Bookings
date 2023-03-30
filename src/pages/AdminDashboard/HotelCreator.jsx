import React, { useState } from "react";
import Form1BasicInfo from "./Form1BasicInfo";
import Form2LocationData from "./Form2LocationData";
import Form3SocialData from "./Form3SocialData";
import Form4Gallery from "./Form4Gallery";
import Form5RoomForm from "./Form5RoomForm";
import RoomList from './RoomList';

function HotelCreator() {
  const [formTab, setFormTab] = useState(1);
  const [roomFormArr, setRoomFormArr] = useState([]);

  /*
      //CHANGE INPUT TO INPUT FILE
      <label for="avatar">Choose a profile picture:</label>
      <input type="file"
          id="avatar" name="avatar"
          accept="image/png, image/jpeg"
        multiple
      >
  */

  function nextFormTab(direction) {
    if (direction === "right") {
      setFormTab(formTab + 1);
      if (formTab >= 5) {
        setFormTab(1);
      }
    } else {
      setFormTab(formTab - 1);
      if (formTab <= 1) {
        setFormTab(5);
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="HotelCreator">
      <h1>Hotel Creation</h1>
      <section style={{ display: formTab === 1 ? "block" : "none" }}>
        <Form1BasicInfo
          setFormTab={setFormTab}
          formTab={formTab}
          scrollToTop={scrollToTop}
        />
      </section>

      <section style={{ display: formTab === 2 ? "block" : "none" }}>
        <Form2LocationData
          setFormTab={setFormTab}
          formTab={formTab}
          scrollToTop={scrollToTop}
        />
      </section>

      <section style={{ display: formTab === 3 ? "block" : "none" }}>
        <Form3SocialData
          setFormTab={setFormTab}
          formTab={formTab}
          scrollToTop={scrollToTop}
        />
      </section>

      <section style={{ display: formTab === 4 ? "block" : "none" }}>
        <h2>Gallery</h2>
        <Form4Gallery
          setFormTab={setFormTab}
          formTab={formTab}
          scrollToTop={scrollToTop}
        />
      </section>

      <section
        className="HC__FormCtn"
        style={{ display: formTab === 5 ? "block" : "none" }}
      >
        <div className="RoomsCreated">
          {roomFormArr.length !== 0 ? (
            <h3>No Rooms have been created</h3>
          ) : (
            <div>
              <h2>Rooms created</h2>
              <RoomList />
            </div>
          )}
        </div>
        <Form5RoomForm
          setRoomFormArr={setRoomFormArr}
          roomFormArr={roomFormArr}
        />

        <div className="HotelForm__footer">
          <button
            className="HotelCreator__form--microSubmit"
            onClick={() => {
              nextFormTab("left");
            }}
          >
            🡸
          </button>
          Step {formTab} / 5
          <button className="HotelCreator__form--microSubmit">
            Create Hotel
          </button>
        </div>
      </section>
    </main>
  );
}

export default HotelCreator;
