import React from "react";
import HomeSteps from "./HomeSteps";
import HomeHeader from "./HomeHeader";
import TopOffers from "./TopOffers";
import NewsLetter from "./NewsLetter"

function Homepage() {
  return (
    <div>
      <HomeHeader />
      <TopOffers />
      <HomeSteps />
      <NewsLetter />
    </div>
  );
}

export default Homepage;
