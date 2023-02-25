import React from "react";
import "./HomeSteps.css";
import exploreIcon from "../../assets/Icons/explore.png";
import customizeIcon from "../../assets/Icons/customize.png";
import quoteIcon from "../../assets/Icons/quote.png";
import bookIcon from "../../assets/Icons/book.png";

function HomeSteps() {
  return (
    <div className="HomeSteps-container">
      <main className="HomeSteps">
        <section className="HomeSteps-txt">
          <h1>Super Easy Booking</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </section>

        <section className="HomeSteps-table">
          <div className="table-cell">
            <img src={exploreIcon} alt="" />
            <p>Explore</p>
          </div>
          <div className="table-cell">
            <img src={quoteIcon} alt="" />
            <p>Get Quotes</p>
          </div>
          <div className="table-cell">
            <img src={customizeIcon} alt="" />
            <p>Customize</p>
          </div>
          <div className="table-cell">
            <img src={bookIcon} alt="" />
            <p>Book & Enjoy</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeSteps;
