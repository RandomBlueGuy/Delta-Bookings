import React from 'react'
import './HotelListHeader.css'

function HotelList() {
  const specialChar = ">>";
  return (
    <main className="Header-container">
      <section className="Header-title">
        <h1>HOTELS IN [CITY]</h1>
        <p>[Hotels in] {specialChar} Hotels in [CITY]</p>
      </section>
    </main>
  )
}

export default HotelList