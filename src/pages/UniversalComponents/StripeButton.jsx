import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function StripeButton() {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const elements = useElements();
  const stripe = useStripe();
  const [infoPay, setInfoPay] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      return;
    }

    const response = await axios.post(`${DB_URL}/api/checkout`, {
      paymentMethod,
      amount: 100,
    });

    elements.getElement(CardElement).clear();
    console.log(response);
    console.log(response.data);
    console.log(response.data.payment.status);
    console.log(response.data.payment.amount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit'>Pay With Stripe</button>
    </form>
  );
}