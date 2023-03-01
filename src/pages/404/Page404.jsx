import React from "react";
import NavBar from "../UniversalComponents/NavBar";
import UpButton from "../UniversalComponents/UpButton";
import Footer from "../UniversalComponents/Footer";
import "./Page404.css";
import { Link } from "react-router-dom";

function page404() {
  return (
    <div>
      <NavBar />
      <UpButton />
      <div className="page404-ctn">
        <h1 className="page404-ctn-title page404-ctn-coloreffect">404</h1>
        <p className="page404-ctn-coloreffect">There's nothing here :(</p>

        <Link to="/">
          <button className="page404-ctn-errorbtn">GO BACK</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default page404;
