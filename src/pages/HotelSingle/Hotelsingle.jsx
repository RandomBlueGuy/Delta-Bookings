import React, { useEffect } from "react";
import "./Hotelsingle.css";
import "../UniversalComponents/BaseStyles.css";
import ContactInfoCard from "./ContactInfoCard";
import HotelSingleCardHeader from "./HotelSingleCardHeader";
import HotelSingleGallery from "./HotelSingleGallery";
import HotelInfoDisplay from "./HotelInfoDisplay";
import weather from "../../assets/Images/weather.jpg";
import CheckCard from "./CheckCard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
} from "../../ReduxStore/Slices/FetchData/fetchDataSlice";

export default function Hotelsingle() {
  const currentHotel = useSelector((state) => state.fetchData.hotelSingle);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = Object.fromEntries(new URLSearchParams(location.search));

  useEffect(() => {
    dispatch(fetchData(searchParams));
  }, []);

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
              {currentHotel && <CheckCard currentHotel={currentHotel} />}
            </section>
            <section className="contactInfo__display">
              {currentHotel && <ContactInfoCard currentHotel={currentHotel} />}
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
