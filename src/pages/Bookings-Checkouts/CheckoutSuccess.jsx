import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CHK.css";
import FloatingMessage from "../UniversalComponents/FloatingMessage";

export default function CheckoutSuccess() {
  const location = useLocation();
  const [showUpdate, setShowUpdate] = useState(true);
  const searchParams = Object.fromEntries(new URLSearchParams(location.search));
  return (
    <div className="container-success">
      <FloatingMessage
        message="We will soon send you an email with the details of your reservation."
        setShowUpdate={setShowUpdate}
        showUpdate={showUpdate}
      />
      <img
        className="picture-travel"
        src="https://thumbs.dreamstime.com/b/traveling-van-design-illustration-retro-white-background-143818470.jpg"
        alt=""
      />
      <div className="text-container"></div>
      <h1>Payment Has Been Successful.</h1>
      <p className="confirmation-text">
        Thank you for your payment. We have recieved your payment succesfully.
        Your transaction ID is: '{searchParams.id}'. You will get an invoice
        mail soon!
      </p>
      <div className="button-wrapper">
        <Link to="/">
          <button style={{ padding: "0.5rem" }}>Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}
