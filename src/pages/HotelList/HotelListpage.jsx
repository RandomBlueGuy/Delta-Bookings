import React from "react";
import Header from "./Header";
import NavBar from "../UniversalComponents/NavBar";
import Footer from "../UniversalComponents/Footer";
import UpButton from "../UniversalComponents/UpButton";
import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";
import "./HotelListpage.css";

function HotelListpage() {
  const totalItems = Math.random() * 9;
  const hotelCardArr = createArrayOfCards(totalItems);
  function createArrayOfCards(totalItems) {
    const element = [];
    for (let i = 0; i < totalItems; i++) {
      element.push(<HotelCard />);
    }
    return element;
  }

  return (
    <div className="HotelListpage-ctn">
      <NavBar />
      <UpButton />
      <Header />
      <SearchBar />
      <div className="card-gallery">{hotelCardArr}</div>
      <Footer />
    </div>
  );
}

export default HotelListpage;
