import React, { useEffect, useState } from "react";
import "./Hotelsingle.css";
import "../UniversalComponents/BaseStyles.css";
import ContactInfoCard from "./ContactInfoCard";
// import HotelCard from '../HotelList/HotelCard';
import HotelSingleCardHeader from "./HotelSingleCardHeader";
import HotelSingleGallery from "./HotelSingleGallery";
import HotelInfoDisplay from "./HotelInfoDisplay";
import weather from "../../assets/Images/weather.jpg";
import CheckCard from "./CheckCard";
import { HScontextProvider } from "./HotelSingleContext/HotelSingleContext";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataHS,
  fetchData,
} from "../../ReduxStore/Slices/FetchData/fetchDataSlice";

export default function Hotelsingle() {
  const { id } = useParams();
  const currentHotel = useSelector((state) => state.fetchData.hotelSingle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(parseInt(id)));
  }, []);

  console.log("currentHotel en HOTEL SINGLE PAGE", currentHotel);

  return (
    <div className="hotelsingle__maxcontainer">
      <main className="hotel__single-container">
        {currentHotel && <HotelSingleCardHeader currentHotel={currentHotel} />}
        <div className="hotels__container-columns">
          <div className="container-column1">
            {currentHotel && <HotelSingleGallery currentHotel={currentHotel} />}
            {currentHotel && <HotelInfoDisplay currentHotel={currentHotel} />}
            <section className="hotel__ctn-displayCard">
              {/* {							
              <HotelCard />
							<HotelCard />
							<HotelCard />} */}
            </section>
            {/* <section className="contact"> */}
          </div>
          <div className="container-column2">
            <section className="contactInfo__display">
              {currentHotel && <CheckCard />}
            </section>
            <section className="contactInfo__display">
              {currentHotel && <ContactInfoCard />}
            </section>

            <div className="weather">
              <img src={weather} alt="" />
            </div>
          </div>
        </div>
        {/* </section> */}
      </main>
    </div>
  );
}
