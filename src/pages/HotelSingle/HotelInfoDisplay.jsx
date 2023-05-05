import React, { useState, useEffect, useRef } from "react";
import RoomCard from "./RoomCard";
import "./HotelInfoDisplay.css";
import { MapContainer, TileLayer } from "react-leaflet";
import StarRating from "../UniversalComponents/StarRating";

function HotelInfoDisplay({ currentHotel = {}, reviews, roomChanger }) {
  const [selectedTab, setSelectedTab] = useState("LOCATION");
  const position = [currentHotel.loc_Lat, currentHotel.loc_Lng];
  const mapRef = useRef(null);

  function handleClick(selection) {
    setSelectedTab(selection);
  }

  useEffect(() => {
    setSelectedTab("ROOMS");
  }, []);

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
            <RoomCard
              key={room.id}
              RoomCardData={room}
              roomChanger={roomChanger}
            />
          ))}
        </article>

        <article
          className="HotelInfoDisplay-about-display"
          style={{ display: selectedTab === "ABOUT" ? "flex" : "none" }}
        >
          <h1 className="Room__title">About {currentHotel?.HotelName}</h1>
          <p className="Room__txt">{currentHotel?.HotelDescription}</p>
          <p className="Room__txt">
            Pellentesque consectetur sem vitae eleifend efficitur. Vivamus a
            tristique nulla, faucibus volutpat libero. Phasellus interdum nisi
            nisi, sit amet lobortis ex vulputate ut. Morbi eget justo pulvinar,
            faucibus arcu ut, viverra justo. Maecenas vestibulum luctus ante
            quis hendrerit. Ut at pulvinar est, a venenatis odio. Proin aliquam
            ante non ante malesuada pellentesque. Sed ac libero bibendum,
            accumsan dui in, feugiat risus. Praesent rutrum quam id libero
            ultrices, congue vehicula dolor egestas. Suspendisse eu leo nec
            turpis rutrum fringilla. Mauris pretium, nibh id dignissim
            sollicitudin, ex erat dignissim mi, in fringilla magna orci ac
            felis. Ut ex elit, posuere at enim eget, commodo elementum tortor.
          </p>
          <p className="Room__txt">
            Integer dui libero, pretium sed mollis sed, egestas non ligula.
            Phasellus accumsan, arcu non maximus pellentesque, justo neque
            placerat libero, in convallis libero ante sed dui. Sed varius ipsum
            vitae ante lobortis, in placerat leo efficitur. Integer lectus arcu,
            egestas nec risus id, consectetur blandit arcu. Duis id molestie
            lectus. Maecenas congue dictum libero, vitae pharetra lorem
            tincidunt ut. Nullam vehicula elementum sem, a aliquam nisi tempus
            eget.
          </p>
        </article>

        <article
          className="HotelInfoDisplay-facility-display"
          style={{ display: selectedTab === "FACILITY" ? "flex" : "none" }}
        >
          <h1 className="Room__title">The Hotel Facilities include: </h1>
          <p className="Room__txt">
            Whether you are travelling for business or pleasure, the luxury
            hotel services offered by the {currentHotel.StarRating} star{" "}
            {currentHotel.HotelName} make it an ideal choice for your stay in{" "}
            {currentHotel.loc_City}, {currentHotel.loc_Country}. The hotel’s
            luxurious surroundings, comfort, thoughtful touches and a
            personalized service sets it apart from any other hotel, allowing
            you to feel like being at home from your very first steps into the
            hotel.
          </p>

          <p className="Room__txt">
            We are geared towards the fulfilment of the needs of any discerning
            guest and below you can find an alphabetical overview of the most
            commonly-used services and facilities offered by our boutique hotel.
          </p>
          <p className="Room__txt">Our facilities include:</p>
          <ul className="Room__list">
            <li> Banquet facilities</li>
            <li>Bar</li>
            <li>Computer facility</li>
            <li>Conference and meeting facilities</li>
            <li>Sauna</li>
            <li>Non-smoking rooms</li>
            <li>Pet friendly, at a surcharge</li>
            <li>Restaurant</li>
            <li>Summer terrace</li>
            <li>Complimentary Wi-Fi internet throughout the entire hotel</li>
            <li>Luggage storage</li>
          </ul>
        </article>

        <article
          className="HotelInfoDisplay-location-display"
          style={{ display: selectedTab === "LOCATION" ? "flex" : "none" }}
        >
          <h1 className="Room__title">
            This is {currentHotel.HotelName}'s current location
          </h1>
          <div className="HotelInfoDisplay__mapCtn">
            <MapContainer
              center={position}
              zoom={10}
              scrollWheelZoom={false}
              className="MapContainer"
              style={{zIndex: 1}}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
          </div>
        </article>

        <article
          className="HotelInfoDisplay-reviews-display"
          style={{ display: selectedTab === "REVIEWS" ? "flex" : "none" }}
        >
          <h1>Hotel Reviews:</h1>
          {reviews.map((review) => {
            return (
              <div className="reviewCard" key={review.id}>
                <div className="reviewCard__titleCtn">
                  <h1 className="reviewCard__title">
                    <span>By: </span>
                    {review.user}
                  </h1>
                  <div className="rating__ctn">
                    <StarRating hotelRating={review.rating} />
                  </div>
                  <h5 className="reviewCard__date">
                    {review.date.slice(0, 10)}
                  </h5>
                </div>

                <p className="reviewCard__review">
                  {review.hotelReview.slice(0, 180)}...
                </p>
              </div>
            );
          })}
        </article>

        <article
          className="HotelInfoDisplay-policies-display"
          style={{ display: selectedTab === "POLICIES" ? "flex" : "none" }}
        >
          <h1 className="Room__title">Hotel Policies</h1>
          <p className="">
            <strong>CHECK IN: </strong> Until{" "}
            {Math.floor(Math.random() * 4) + 8}:00 AM
          </p>
          <p className="">
            <strong>CHECK IN: </strong> Until{" "}
            {Math.floor(Math.random() * 4) + 16}:00 PM
          </p>
          <h2 style={{ opacity: "0" }}>___</h2>
          <h2 className="Room__title">Other considerations</h2>
          <p className="">
            Pellentesque consectetur sem vitae eleifend efficitur. Vivamus a
            tristique nulla, faucibus volutpat libero. Phasellus interdum nisi
            nisi, sit amet lobortis ex vulputate ut. Morbi eget justo pulvinar,
            faucibus arcu ut, viverra justo. Maecenas vestibulum luctus ante
            quis hendrerit. Ut at pulvinar est, a venenatis odio. Proin aliquam
            ante non ante malesuada pellentesque. Sed ac libero bibendum,
            accumsan dui in, feugiat risus. Praesent rutrum quam id libero
            ultrices, congue vehicula dolor egestas. Suspendisse eu leo nec
            turpis rutrum fringilla. Mauris pretium, nibh id dignissim
            sollicitudin, ex erat dignissim mi, in fringilla magna orci ac
            felis. Ut ex elit, posuere at enim eget, commodo elementum tortor.
          </p>
        </article>
      </section>
    </main>
  );
}

export default HotelInfoDisplay;
