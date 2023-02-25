import React from "react";
import Header from "./Header";
import NavBar from "../UniversalComponents/NavBar";
import Footer from "../UniversalComponents/Footer";
import UpButton from "../UniversalComponents/UpButton";
import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";

function HotelListpage() {
  return (
    <div>
      <NavBar />
      <UpButton />
      <Header />
      <SearchBar />
      <HotelCard />
      <Footer />
    </div>
  );
}

export default HotelListpage;
