import React from "react";
import "./CardRoom.css";

function CardRoom() {
  return (
    <section className="rooms">
      <section className="room__container">
        <div className="room__container-title">
          <h1>Deluxe Room</h1>
        </div>

        <section className="room__container-info">
          <div className="room__container-info-img">
            <img src="../" alt="" />
          </div>
          <div className="room__container-info-amenities">
            <ul>
              <h1>Amenities</h1>
              <li>King/Twin</li>
              <li>Shower</li>
              <li>Couch</li>
              <li>LC TV</li>
            </ul>
          </div>
          <div className="room__container-info-inclusion">
            <ul>
              <h1>Inclusion</h1>
              <li>Wi-Fi</li>
              <li>Breakfast</li>
              <li>Non Refundable</li>
            </ul>
          </div>
        </section>
        <section className="room__container-price">
          <div className="room__container-info-price">
            <h2>$1250</h2>
            <h1>$1000</h1>
            <p>per night</p>
            <button className="room__container-info-price-btn">Book Now</button>
          </div>
          <div className="vacio"></div>
        </section>
      </section>
    </section>
  );
}
export default CardRoom;
