import React from "react";
import HomeSteps from "./HomeSteps";
import NavBar from "../UniversalComponents/NavBar";
import UpButton from "../UniversalComponents/UpButton";
import HomeHeader from "./HomeHeader";
import TopOffers from "./TopOffers";
import NewsLetter from "./NewsLetter"
import Footer from "../UniversalComponents/Footer"

function Homepage() {
  return (
    <div>
      <NavBar />
      <UpButton />
      <HomeHeader />
      <TopOffers />
      <HomeSteps />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Homepage;
