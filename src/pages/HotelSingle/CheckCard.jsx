import React from "react";
import "./CheckCard.css";

function CheckCard() {
  return (
    <section className="card">
      <section className="check__card">
        <div className="check__card-map">
          <img src="" alt="" />
        </div>
        <section className="check__card-text">
          <div className="check__card-text-li">
            <h1>Deluxe Rate</h1>
            <ul>
              <li>Room Only</li>
              <li>Non Refundable</li>
            </ul>
          </div>

          <div className="check__card-price">
            <p>Per Nigth</p>
            <h2>$251</h2>
            <h1>$230</h1>
          </div>
        </section>
        <form className="check__card-form" action="">
          <div className="form-box-ctn">
            <label htmlFor="">CHECK-IN</label>
            <input type="date" placeholder="Fecha del Check-in" />
          </div>

          <div className="form-box-ctn">
            <label htmlFor="">CHECK-OUT</label>
            <input type="date" placeholder="Fecha de Check-out" />
          </div>

          <div className="form-box-ctn">
            <label htmlFor="">Rooms & Guests</label>
            <input type="text" placeholder="Ingrese ciudad de destino" />
          </div>

          <div className="form-box-ctn">
            <label htmlFor="">Room Type</label>
            <input type="number" placeholder="Choose" />
          </div>

          <div className="form-box-ctn">
            <button className="search-btn">Book This Now</button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default CheckCard;
