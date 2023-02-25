import React from "react";
import "./HomeHeader.css";
import SearchBar from "../HotelList/SearchBar";

function HomeHeader() {
  return (
    <main className="HomeHeader">
      <section className="HomeHeader-title">
        <h1>BOOK ROOMS, HOMES & APTS</h1>
      </section>
      <section className="sb-ctn">
        <SearchBar />
      </section>
    </main>
  );
}

export default HomeHeader;
