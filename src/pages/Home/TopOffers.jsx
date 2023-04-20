import React from "react";
import "./TopOffers.css";
import offer1Img from "../../assets/Images/offer1.png";
import offer2Img from "../../assets/Images/offer2.png";
import offer3Img from "../../assets/Images/offer3.png";
import offer4Img from "../../assets/Images/offer4.png";
import offer5Img from "../../assets/Images/offer5.png";
import place1Img from "../../assets/Images/place1.png";
import place2Img from "../../assets/Images/place2.png";
import place3Img from "../../assets/Images/place3.png";
import place4Img from "../../assets/Images/place4.png";
import place5Img from "../../assets/Images/place5.png";
import place6Img from "../../assets/Images/place6.png"; 

function TopOffers() {
  return (
    <main className="TopOffers-container">
      <h1>Top Offers</h1>
      <section className="TopOffers-table">
        <div className="table-card">
          <img src={offer1Img} alt="" />
          <h3>Hotel Booking</h3>
          <p>Avail Hot Deals On Hotel Booking To Any Place</p>
        </div>
        <div className="table-card">
          <img src={offer2Img} alt="" />
          <h3>Hotel Booking</h3>
          <p>Avail Hot Deals On Hotel Booking To Any Place</p>
        </div>
        <div className="table-card">
          <img src={offer3Img} alt="" />
          <h3>Hotel Booking</h3>
          <p>Avail Hot Deals On Hotel Booking To Any Place</p>
        </div>
        <div className="table-card">
          <img src={offer4Img} alt="" />
          <h3>Hotel Booking</h3>
          <p>Avail Hot Deals On Hotel Booking To Any Place</p>
        </div>
        <div className="table-card">
          <img src={offer5Img} alt="" />
          <h3>Hotel Booking</h3>
          <p>Avail Hot Deals On Hotel Booking To Any Place</p>
        </div>
      </section>

      <section className="TopOffers-table">
        <div className="table-card ">
          <img src={place1Img} className="place-img " alt="" />
          <h3>South Africa</h3>
          <p>Starting from $50000</p>
        </div>
        <div className="table-card">
          <img src={place2Img} className="place-img " alt="" />
          <h3>India</h3>
          <p>Starting from $50000</p>
        </div>
        <div className="table-card">
          <img src={place3Img} className="place-img " alt="" />
          <h3>India</h3>
          <p>Starting from $50000</p>
        </div>
        <div className="table-card">
          <img src={place4Img} className="place-img " alt="" />
          <h3>Hotel Booking</h3>
          <p>Starting from $50000</p>
        </div>
        <div className="table-card">
          <img src={place5Img} className="place-img " alt="" />
          <h3>Hotel Booking</h3>
          <p>Starting from $50000</p>
        </div>
        <div className="table-card">
          <img src={place6Img} className="place-img " alt="" />
          <h3>Hotel Booking</h3>
          <p>Starting from $50000</p>
        </div>
      </section>
    </main>
  );
}

export default TopOffers;
