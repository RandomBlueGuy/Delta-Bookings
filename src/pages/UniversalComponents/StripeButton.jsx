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
      <CardNumberElement
        style={{
          padding: "10px",
          border: "10px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <CardExpiryElement
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <CardCvcElement
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {isLoading === true && (
        <LoadingComp message={"We are processing your payment"} />
      )}
      <button type='submit' style={{ padding: "0.5rem 0.75rem" }}>
        Pay With Stripe
      </button>
    </form>
  );
}
