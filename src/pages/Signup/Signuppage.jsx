import React from "react";
import Signup from "./Signup";
import NavBar from "../UniversalComponents/NavBar";
import UpButton from "../UniversalComponents/UpButton";
import Footer from "../UniversalComponents/Footer";
import HeaderSignup from "./HeaderSignup";


function Signuppage() {
  return (
    <div>
      <NavBar />
      <HeaderSignup />
      <UpButton />
        <Signup />
      <Footer />
    </div>
  );
}

export default Signuppage;
