import React from "react";
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

export default function Hotelsingle() {
  
  return (
    <HScontextProvider>
      <div className="hotelsingle__maxcontainer">
        <main className="hotel__single-container">
          <HotelSingleCardHeader />
          <div className="hotels__container-columns">
            <div className="container-column1">
              <HotelSingleGallery />
              <HotelInfoDisplay />
              <section className="hotel__ctn-displayCard">
                {/* {							<HotelCard />
							<HotelCard />
							<HotelCard />} */}
              </section>
              {/* <section className="contact"> */}
            </div>
            <div className="container-column2">
              <section className="contactInfo__display">
                <CheckCard />
              </section>
              <section className="contactInfo__display">
                <ContactInfoCard />
              </section>

              <div className="weather">
                <img src={weather} alt="" />
              </div>
            </div>
          </div>
          {/* </section> */}
        </main>
      </div>
    </HScontextProvider>
  );
}
