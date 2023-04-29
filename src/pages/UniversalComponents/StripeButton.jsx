import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function StripeButton({ sendPayment, finalPrice }) {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const elements = useElements();
  const stripe = useStripe();
  // const [infoPay, setInfoPay] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      return "Error";
    }
    const card= paymentMethod.card;
    const { data } = await axios
      .post(`${DB_URL}/api/checkout`, {
        paymentMethod,
        amount: Math.floor(finalPrice) * 100,
        source:'tok_visa'
      })
      .catch((error) =>
        console.log(
          "There was an error during the purchase, try again",
          error.message
        )
      );
    // elements.getElement(CardElement).clear();
    sendPayment(data.message, data, card);
    // console.log(card)
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" style={{ padding: "0.5rem 0.75rem" }}>
        Pay With Stripe
      </button>
    </form>
  );
}
