import React from "react";
import "./HotelListHeader.css";

function HotelList({ location }) {
  return (
    <main className="Header-container">
      <section className="Header-title">
        <h1>NEED A HOTEL?</h1>
        <p>
          {location !== "All"
            ? `HOTELS IN ${location.toUpperCase()}`
            : "HOTELS EVERYWHERE"}
        </p>
      </section>
    </main>
  );
}

export default HotelList;
