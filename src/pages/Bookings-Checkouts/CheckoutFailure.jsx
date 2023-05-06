import React from "react";
import "./CHK.css";
import { Link } from "react-router-dom";

export default function CheckoutFailure() {
  return (
    <div className="container-success">
      <img
        className="picture-travel"
        src="https://media.istockphoto.com/id/1026915588/vector/harmful-symbol-warning-sign-vector-illustration-eps10.jpg?s=612x612&w=0&k=20&c=mZ3b5zvq61kwfluwWqnvFRGMSy32M4D_r0a2gO8a110="
        alt=""
      />
      <div className="text-container"></div>
      <h1>Something Went Wrong With The Payment</h1>
      <h2>The payment process crashed. Don't worry no payments were made</h2>

      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}
