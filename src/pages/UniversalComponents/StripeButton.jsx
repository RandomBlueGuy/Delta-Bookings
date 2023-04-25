import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function StripeButton() {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log("Ups! ocurrió un error");
      return;
    }

    const response = await axios.post("http://localhost:8080/api/checkout", {
      paymentMethod,
      amount: 100,
    });

    //console.log('Response Back:', response);
    elements.getElement(CardElement).clear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit'>Pay With Stripe</button>
    </form>
  );
}
