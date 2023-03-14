import React from "react";
import "./CHK.css";

export default function CheckoutSuccess() {
  return (
    <div className="container-success">
      <img
        className="picture-travel"
        src="https://thumbs.dreamstime.com/b/traveling-van-design-illustration-retro-white-background-143818470.jpg"
        alt=""
      />
      <div className="text-container"></div>
      <h1>Payment Succesfull ! Get Ready For Conformtable Stay.</h1>
      <p className="confirmation-text">
        Thank you for your payment. We have recieved your payment succesfully.
        Your transaction ID is: 'SHD4993034'. You will get an invoice mail soon!
      </p>
      <button>Download Invoice</button>
    </div>
  );
}
