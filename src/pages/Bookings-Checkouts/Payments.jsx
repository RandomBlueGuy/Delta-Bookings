import React, { useState } from "react";
import "./styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StripeButton from "../UniversalComponents/StripeButton";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51N0c89EVaWSJ74nLzQn1EK6VmxmVrVpEnnQZCl8uWRqzCfDRQIOnDkMvn3PSb3wkIxosQT9bJbDZmYk4uAesUdoC00HMQf6eck"
);

export default function Payments() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handler = window.ePayco.checkout.configure({
    key: "84793745e1cb8ebb40ff304f2853aa4a",
    test: true,
  });

  const epaycoPayment = () => {
    handler.open({
      name: "Hotel Testing in mitte",
      description: "deluxe room",
      invoice: "11",
      currency: "usd",
      amount: 20,
      tax_base: "0",
      tax: "0",
      country: "CO",
      lang: "en",
      external: "false",
      extra1: "extra1",
      extra2: "extra2",
      extra3: "extra3",
      confirmation: "http://secure2.payco.co/prueba_curl.php",
      response: "http://secure2.payco.co/prueba_curl.php",
      name_billing: "Andres Perez",
      address_billing: "Carrera 19 numero 14 91",
      type_doc_billing: "cc",
      mobilephone_billing: "3050000000",
      number_doc_billing: "100000000",

      methodsDisable: ["CASH"],
    });
  };

  return (
    <div className='container-2'>
      <section className='travelInfo-container'>
        <h4> Payment Options</h4>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls='panel1d-content'
            id='panel1d-header'
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              <span
                style={{
                  color: expanded === "panel1" ? "var(--red-style)" : "black",
                  fontSize: "120%",
                }}
              >
                ◉
              </span>{" "}
              Pay With Stripe
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Elements stripe={stripePromise}>
                <StripeButton />
              </Elements>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2d-content'
            id='panel2d-header'
          >
            <Typography>
              <span
                style={{
                  color: expanded === "panel2" ? "var(--red-style)" : "black",
                  fontSize: "120%",
                }}
              >
                ◉
              </span>{" "}
              Epayco
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div class='accordion-item'>
                <button onClick={epaycoPayment} className='btn'>
                  SUBMIT PAYMENT
                </button>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
}
