import React from "react";
import Header from "./Header";
import HotelCard from "./HotelCard";
import "./HotelListpage.css";
import SearchBar from "./SearchBar"

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
      <SearchBar />
      <div className="card-gallery">{hotelCardArr}</div>
    </div>
  );
}

export default HotelListpage;
