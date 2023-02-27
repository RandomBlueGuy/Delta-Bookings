import React from "react";
import Header from "./Header";
import NavBar from "../UniversalComponents/NavBar";
import Footer from "../UniversalComponents/Footer";
import UpButton from "../UniversalComponents/UpButton";
import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";
import "./HotelListpage.css"

function HotelListpage() {
  return (
    <div className="HotelListpage-ctn">
      <NavBar />
      <UpButton />
      <Header />
      <SearchBar />
      <div className="card-gallery">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>

      <Footer />
    </div>
  );
}

export default HotelListpage;
