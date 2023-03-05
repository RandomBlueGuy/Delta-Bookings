import React from 'react'
import './Header.css'

function HotelList() {
  const specialChar = ">>";
  return (
    <main className="Header-container">
      <section className="Header-title">
        <h1>HOTELS IN [CITY]</h1>
        <p>[PAGE] {specialChar} Hotels in [CITY]</p>
      </section>
    </main>
  )
}

export default HotelList