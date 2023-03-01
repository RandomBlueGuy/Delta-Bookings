import React from "react";
import BookingInfo from "./BookingInfo";
import TravellerInfo from "./TravellerInfo";
import NavBar from "../UniversalComponents/NavBar";
import Footer from "../UniversalComponents/Footer";
import HomeHeader from "../Home/HomeHeader";
import UpButton from "../UniversalComponents/UpButton";
import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";


function Bookingpage() {
  return (
    <div>
      <NavBar />
      <HomeHeader />
      <UpButton />
      <div className="booking-info">
        <BookingInfo />
        <TravellerInfo />
      </div>
      <Footer />
    </div>
  );
}

export default Bookingpage;
