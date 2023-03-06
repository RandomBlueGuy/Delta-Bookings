import React, { useState } from "react";
import "./styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Payments() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <article className="container-2">
      <section className="travelInfo-container">
        <h4>Payment Options</h4>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Credit Card</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div class="accordion-item">
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="general-info">
                      <label for="cc-name">Name on card</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder=""
                      />
                      <small class="text-muted">
                        Full name as displayed on card
                      </small>

                      <div class="credit-card">
                        <label for="cc-number">Credit card number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cc-number"
                          placeholder=""
                        />
                      </div>

                      <div class="card-info">
                        <div class="month">
                          <label for="cc-expiration">Month</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-expiration"
                            placeholder="Month"
                          />
                        </div>
                        <div class="year">
                          <label for="cc-cvv">Year</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-cvv"
                            placeholder="Year"
                          />
                        </div>
                        <div class="ccv">
                          <label for="cc-expiration">CCV</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-expiration"
                            placeholder="CCV"
                          />
                        </div>
                      </div>
                      <div className="button-pay">
                        <button type="button" className="btn">
                          SUBMIT PAYMENT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>Debit Card</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div class="accordion-item">
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="general-info">
                      <label for="cc-name">Name on card</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder=""
                      />
                      <small class="text-muted">
                        Full name as displayed on card
                      </small>

                      <div class="credit-card">
                        <label for="cc-number">Credit card number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cc-number"
                          placeholder=""
                        />
                      </div>

                      <div class="card-info">
                        <div class="month">
                          <label for="cc-expiration">Month</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-expiration"
                            placeholder="Month"
                          />
                        </div>
                        <div class="year">
                          <label for="cc-cvv">Year</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-cvv"
                            placeholder="Year"
                          />
                        </div>
                        <div class="ccv">
                          <label for="cc-expiration">CCV</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-expiration"
                            placeholder="CCV"
                          />
                        </div>
                      </div>
                      <div className="button-pay">
                        <button type="button" className="btn">
                          SUBMIT PAYMENT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </article>
  );
}
