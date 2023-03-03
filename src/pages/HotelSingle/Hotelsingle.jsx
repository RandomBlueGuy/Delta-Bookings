import React from "react";
import "./Hotelsingle.css";
import CardRoom from "./CardRoom";
import CheckCard from "./CheckCard";
import ContactInfoCard from "./ContactInfoCard"
import HotelCard from "../HotelList/HotelCard"
import AboutHeader from "../AboutUs/AboutHeader";
import StarRating from "../UniversalComponents/StarRating";



export default function Hotelsingle() {
  return (
    <div>
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
          <div className="hotels__img">
            <img src="" alt="" />
            <span>View All Images</span>
          </div>
          <div className="imgHot2">
            <img src="" alt="" />
            <span>Room Images</span>
          </div>
          <div className="imgHot3">
            <img src="" alt="" />
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
        <section className="rooms">
            <CardRoom />
            <CardRoom />
            <CardRoom />
        </section> 
        <section className="hotel__ctn-displayCard">
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </section>
      </section>
      <section className="contact">
        <CheckCard />
        <ContactInfoCard />
        <div className="weather">
            <img src="" alt="" />
        </div>
      </section>

      
    </main>
    </div>
  );
}
