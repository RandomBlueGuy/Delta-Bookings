import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import LoadingComp from "../UniversalComponents/LoadingComp";
import "../UniversalComponents/StripeButton.css";

export default function StripeButton({ sendPayment, finalPrice }) {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const elements = useElements();
  const stripe = useStripe();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardNumberElement,
        CardCvcElement,
        CardExpiryElement
      ),
    });

    if (error) {
      return "Error";
    }
    const card = paymentMethod.card;
    const { data } = await axios
      .post(`${DB_URL}/api/checkout`, {
        paymentMethod,
        amount: Math.floor(finalPrice) * 100,
        source: "tok_visa",
      })
      .catch((error) =>
        console.log(
          "There was an error during the purchase, try again",
          error.message
        )
      );

    sendPayment(data.message, data, card);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label className="stripe-label">Card Number</label>
      <CardNumberElement className="stripe-input" />
      <label className="stripe-label">Card Expiration</label>
      <CardExpiryElement className="stripe-input" />
      <label className="stripe-label">Card CVC</label>
      <CardCvcElement className="stripe-input" />
      {isLoading === true && (
        <LoadingComp message={"We are processing your payment"} />
      )}
      <button
        type="submit"
        style={{ margin: "1rem", padding: "0.5rem 0.75rem" }}
      >
        Pay With Stripe
      </button>
    </form>
  );
}
