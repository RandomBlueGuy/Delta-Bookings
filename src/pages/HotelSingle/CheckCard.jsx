import React from "react";
import "./CheckCard.css";
import viewonmap from "../../assets/Images/viewonmap.jpg"

function CheckCard() {
  return (

    <section className="check__card">
      <div className="check__card-map">
        <img src={viewonmap} alt="" />
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

          <input type="date" placeholder="Fecha del Check-in" />
          <input type="date" placeholder="Fecha de Check-out" />
          <input type="text" placeholder="Ingrese ciudad de destino" />
          <input type="number" placeholder="Choose" />
          <button className="search-btn">Book This Now</button>
       
      </form>

      </section>

     
  );
}

export default CheckCard;
