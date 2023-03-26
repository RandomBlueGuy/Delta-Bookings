import React, { useContext, useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import "./HotelInfoDisplay.css";
import hotelPlaceholderImg from "../../assets/Images/hotelPlaceholder.jpg";
import { HotelSingleContext } from "./HotelSingleContext/HotelSingleContext";
import { Hotel } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataHS } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";
import { useParams, useLocation } from "react-router-dom";

function HotelInfoDisplay({currentHotel = {}}) {
  const [selectedTab, setSelectedTab] = useState("ROOMS");

  // console.log("EN HOTEL INFODISOLAY",currentHotel)
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
          {currentHotel?.Rooms.map((room) => (
            <RoomCard RoomCardData={room} />
          ))}
        </article>

        <article
          className="HotelInfoDisplay-about-display"
          style={{ display: selectedTab === "ABOUT" ? "flex" : "none" }}
        >
          <h1>About {currentHotel?.HotelName}</h1>
          <p>{currentHotel?.HotelDescription}</p>
        </article>

        <article
          className="HotelInfoDisplay-facility-display"
          style={{ display: selectedTab === "FACILITY" ? "flex" : "none" }}
        >
          <h1>The Hotel Facilities include: </h1>
          {currentHotel?.HotelDescription}
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
          {currentHotel?.Reviews.map((review) => {
            return (
              <div>
                <h1>User: {review.User}</h1>
                <p>{review.Date}</p>
                <p>{review.HotelReview}</p>
              </div>
            );
          })}
        </article>

        <article
          className="HotelInfoDisplay-policies-display"
          style={{ display: selectedTab === "POLICIES" ? "flex" : "none" }}
        >
          <h1>Hotel Policies</h1>
          {currentHotel?.Policies.map((policy) => {
            return (
              <div>
                <li>{policy}</li>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}

export default HotelInfoDisplay;
