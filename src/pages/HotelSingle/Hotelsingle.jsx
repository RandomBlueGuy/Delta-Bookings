import React from "react";
import "./Hotelsingle.css";
import "../UniversalComponents/BaseStyles.css"
import CardRoom from "./CardRoom";
import CheckCard from "./CheckCard";
import ContactInfoCard from "./ContactInfoCard"
import HotelCard from "../HotelList/HotelCard"
import AboutHeader from "../AboutUs/AboutHeader";
import StarRating from "../UniversalComponents/StarRating";
import hotel1 from "../../assets/Images/hotel1.jpg"
import hotel2 from "../../assets/Images/hotel2.jpg"
import hotel3 from "../../assets/Images/hotel3.jpg"
import weather from "../../assets/Images/weather.jpg"



export default function Hotelsingle() {
  return (
    <div className="hotelsingle__maxcontainer">
      <AboutHeader />
      <main className="hotel__single-container">

        <section className="hotel__name">
          <div className="hotel__text">
            <div className="name__p">
              <h1>Sea View Hotel</h1>
              <StarRating />
              <button className="name__p-btn">
                <img src="" alt="" />
                <span className="name__p-span">Share</span>
              </button>
              <button className="name__p-btn">
                <img src="" alt="" />
                <span className="name__p-span">Save</span>
              </button>
            </div>
            <div className="hotel__name-text">
              <h3>Mina Road, Bur Dubai, Dubai, United Arab Emirates</h3>
              <div className="hotel__name-free">
                <button className="hotel__name-free-btn">Free WiFi</button>
                <button className="hotel__name-free-btn">Free Breakfast</button>
              </div>
            </div>
          </div>
          <div className="hotel__name-price">
            <h1>
              $250 <span>/ Per Nigth</span>
            </h1>
            <button className="hotel__name-price-btn">Book This Now</button>
          </div>
        </section>

        <section className="hotels__container">
          <section className="hotels">
            <div className="hotel1">
              <img src={hotel1} alt="" />
              <span>View All Images</span>
            </div>
            <div className="hotel2">
              <img src={hotel2} alt="" />
              <span>Room Images</span>
            </div>
            <div className="hotel3">
              <img src={hotel3} alt="" />
              <span>Poll Images</span>
            </div>
          </section>
          <section className="hotel__info">
            <input type="button" value="ROOMS" />
            <input type="button" value="ABOUT" />
            <input type="button" value="FACILITY" />
            <input type="button" value="LOCATION" />
            <input type="button" value="REVIEWS" />
            <input type="button" value="POLICIES" />
          </section>
          {/* Seccion habitaciones */}
          <section className="rooms__display">
            <CardRoom />
            <CardRoom />
            <CardRoom />
          </section>
          <section className="hotel__ctn-displayCard">
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </section>
          {/* <section className="contact"> */}
          <section className="checkcard__display">
            <CheckCard />
          </section>
          <section className="contactInfo__display">
            <ContactInfoCard />
          </section>

          <div className="weather">
            <img src={weather} alt="" />
          </div>
          {/* </section> */}
        </section>



      </main>
    </div>
  );
}
