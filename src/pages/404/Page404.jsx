import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";

function page404() {
  return (
    <div>
      <div className="page404-ctn">
        <h1 className="page404-ctn-title page404-ctn-coloreffect">404</h1>
        <p className="page404-ctn-coloreffect">There's nothing here :(</p>
        <Link to="/">
          <button className="page404-ctn-errorbtn">GO BACK</button>
        </Link>
      </div>
    </div>
  );
}

export default page404;
