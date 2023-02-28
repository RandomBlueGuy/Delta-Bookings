import React from "react";
import Signup from "./Signup";
import NavBar from "../UniversalComponents/NavBar";
import UpButton from "../UniversalComponents/UpButton";
import Footer from "../UniversalComponents/Footer";
import HomeHeader from "./HeaderSignup";


function Signuppage() {
  return (
    <div>
      <NavBar />
      <HomeHeader />
      <UpButton />
        <Signup />
      <Footer />
    </div>
  );
}

export default Signuppage;
