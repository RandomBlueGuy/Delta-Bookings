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

export default function Payments({sendPayment, finalPrice}) {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
                <StripeButton sendPayment={sendPayment} finalPrice={finalPrice}/>
              </Elements>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
}
