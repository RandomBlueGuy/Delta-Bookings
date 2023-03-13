import React, { useContext, useState } from "react";
import RoomCard from "./RoomCard";
import "./HotelInfoDisplay.css";
import hotelPlaceholderImg from "../../assets/Images/hotelPlaceholder.jpg";
import { HotelSingleContext } from "./HotelSingleContext/HotelSingleContext";
import { Hotel } from "@mui/icons-material";

function HotelInfoDisplay() {
  const [selectedTab, setSelectedTab] = useState("ROOMS");
  const HotelData = useContext(HotelSingleContext);

  function handleClick(selection) {
    setSelectedTab(selection);
  }

  return (
    <main className="HotelInfoDisplay-ctn">
      <section className="HotelInfoDisplay-tabs">
        <button
          type="button"
          value="ROOMS"
          className={selectedTab === "ROOMS" ? "is-active" : ""}
          onClick={(event) => handleClick(event.target.value)}
        >
          ROOMS
        </button>
        <button
          type="button"
          value="ABOUT"
          className={selectedTab === "ABOUT" ? "is-active" : ""}
          onClick={(event) => handleClick(event.target.value)}
        >
          ABOUT
        </button>
        <button
          type="button"
          value="FACILITY"
          className={selectedTab === "FACILITY" ? "is-active" : ""}
          onClick={(event) => handleClick(event.target.value)}
        >
          FACILITY
        </button>
        <button
          type="button"
          value="LOCATION"
          className={selectedTab === "LOCATION" ? "is-active" : ""}
          onClick={(event) => handleClick(event.target.value)}
        >
          LOCATION
        </button>
        <button
          type="button"
          value="REVIEWS"
          className={selectedTab === "REVIEWS" ? "is-active" : ""}
          onClick={(event) => handleClick(event.target.value)}
        >
          REVIEWS
        </button>
        <button
          type="button"
          value="POLICIES"
          className={selectedTab === "POLICIES" ? "is-active" : ""}
          onClick={(event) => handleClick(event.target.value)}
        >
          POLICIES
        </button>
      </section>
      <section className="HotelInfoDisplay-ctn">
        <article
          className="HotelInfoDisplay-rooms-display"
          style={{ display: selectedTab === "ROOMS" ? "flex" : "none" }}
        >
          {HotelData?.Rooms.map(element => <RoomCard RoomCardData = {element.card}/>)}
        </article>

        <article
          className="HotelInfoDisplay-about-display"
          style={{ display: selectedTab === "ABOUT" ? "flex" : "none" }}
        >
          <h1>About {HotelData?.HotelName}</h1>
          <p>{HotelData?.About?.HotelDescription}</p>
        </article>

        <article
          className="HotelInfoDisplay-facility-display"
          style={{ display: selectedTab === "FACILITY" ? "flex" : "none" }}
        >
          <h1>The Hotel Facilities include: </h1>
          {HotelData?.Location?.Place}
        </article>

        <article
          className="HotelInfoDisplay-location-display"
          style={{ display: selectedTab === "LOCATION" ? "flex" : "none" }}
        >
          <h1>Aquí estaría el location del hotel</h1>
          <img src={hotelPlaceholderImg} alt="" />
        </article>

        <article
          className="HotelInfoDisplay-reviews-display"
          style={{ display: selectedTab === "REVIEWS" ? "flex" : "none" }}
        >
          <h1>Hotel Reviews:</h1>
          {HotelData?.About?.Reviews.map((element) => {
            return (
              <div>
                <h1>User: {element.User}</h1>
                <p>{element.Date}</p>
                <p>{element.HotelReview}</p>
              </div>
            );
          })}
        </article>

        <article
          className="HotelInfoDisplay-policies-display"
          style={{ display: selectedTab === "POLICIES" ? "flex" : "none" }}
        >
          <h1>Hotel Policies</h1>
          {HotelData?.About?.Policies.map((element) => {
            return (
              <div>
                <li>{element}</li>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}

export default HotelInfoDisplay;
