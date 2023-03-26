import React, { useState } from "react";
import "./styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

export default function Payments() {
  const [expanded, setExpanded] = useState("panel1");
  const [clientInfo, setClientInfo] = useState({
    cardname: "",
    cardnumber: "",
    cardmonth: "",
    cardyear: "",
    cardccv: "",
  });
  const [errors, setErrors] = useState({});
  const { cardname, cardnumber, cardmonth, cardyear, cardccv } = clientInfo;

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangeData = (event) => {
    const { name, value } = event.target;
    setClientInfo({
      ...clientInfo,
      [name]: value,
    });
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (cardname.trim() === "") {
      validationErrors.cardName = "Enter the name that appears on your card";
    } else if (!/^[a-zA-Z]+$/.test(cardname.trim().replace(/\s+/g, ""))) {
      validationErrors.cardName = "Name must only contain letters";
    }

    if (cardnumber.trim() === "") {
      validationErrors.cardNumber = "Enter your card's number";
    } else if (!/^[0-9]*$/.test(cardnumber.trim().replace(/\s+/g, ""))) {
      validationErrors.cardNumber = "Only numeric characters are accepted";
    } else if (cardnumber.trim().replace(/\s+/g, "").length !== 16) {
      validationErrors.cardNumber = "Enter a valid card number extension";
    }

    if (cardmonth.trim() === "") {
      validationErrors.cardMonth = "Enter the month of expiration";
    } else if (!/^[0-9]*$/.test(cardmonth)) {
      validationErrors.cardMonth = "Only numeric characters are accepted";
    } else if (cardmonth.trim().length !== 2) {
      validationErrors.cardMonth = "Enter a valid month expiration";
    }

    if (cardyear.trim() === "") {
      validationErrors.cardYear = "Enter the year of expiration";
    } else if (!/^[0-9]*$/.test(cardyear)) {
      validationErrors.cardYear = "Only numeric characters are accepted";
    } else if (cardyear.trim().length !== 4) {
      validationErrors.cardYear = "Enter a valid Year expiration";
    }

    if (cardccv.trim() === "") {
      validationErrors.cardCCV = "Enter your CCV";
    } else if (!/^[0-9]*$/.test(cardccv)) {
      validationErrors.cardCCV = "Only numeric characters are accepted";
    } else if (cardccv.trim().length !== 3) {
      validationErrors.cardCCV = "Enter a valid CCV";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleInfo} className='container-2'>
      <section className='travelInfo-container'>
        <h4>Payment Options</h4>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls='panel1d-content'
            id='panel1d-header'
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Credit Card</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div class='accordion-item'>
                <div
                  id='collapseOne'
                  class='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <div class='general-info'>
                      <label htmlFor='cardname'>
                        Name on card
                        <input
                          name='cardname'
                          type='text'
                          class='form-control'
                          id='cardname'
                          placeholder=''
                          value={cardname}
                          onChange={(event) => handleChangeData(event)}
                        />
                        {errors.cardName && (
                          <span className='error'>{errors.cardName}</span>
                        )}
                      </label>

                      <small class='text-muted'>
                        Full name as displayed on card
                      </small>

                      <div class='credit-card'>
                        <label htmlFor='cardnumber'>
                          Credit card number
                          <input
                            name='cardnumber'
                            type='text'
                            class='form-control'
                            id='cc-number'
                            placeholder=''
                            onChange={(event) => handleChangeData(event)}
                            value={cardnumber}
                          />
                          {errors.cardNumber && (
                            <span className='error'>{errors.cardNumber}</span>
                          )}
                        </label>
                      </div>

                      <div class='card-info'>
                        <div class='month'>
                          <label htmlFor='cardmonth'>
                            Month
                            <input
                              name='cardmonth'
                              type='text'
                              class='form-control'
                              id='cc-expiration'
                              placeholder='E.g: 08'
                              onChange={(event) => handleChangeData(event)}
                              value={cardmonth}
                            />
                            {errors.cardMonth && (
                              <span className='error'>{errors.cardMonth}</span>
                            )}
                          </label>
                        </div>

                        <div class='year'>
                          <label htmlFor='cardyear'>
                            Year
                            <input
                              name='cardyear'
                              type='text'
                              class='form-control'
                              id='cc-cvv'
                              placeholder='E.g: 2023'
                              onChange={(event) => handleChangeData(event)}
                              value={cardyear}
                            />
                            {errors.cardYear && (
                              <span className='error'>{errors.cardYear}</span>
                            )}
                          </label>
                        </div>
                        <div class='ccv'>
                          <label htmlFor='cardccv'>
                            CCV
                            <input
                              name='cardccv'
                              type='text'
                              class='form-control'
                              id='cc-expiration'
                              placeholder='CCV'
                              onChange={(event) => handleChangeData(event)}
                              value={cardccv}
                            />
                            {errors.cardCCV && (
                              <span className='error'>{errors.cardCCV}</span>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className='button-pay'>
                        <button type='submit' className='btn'>
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
            aria-controls='panel2d-content'
            id='panel2d-header'
          >
            <Typography>Debit Card</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div class='accordion-item'>
                <div
                  id='collapseOne'
                  class='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <div class='general-info'>
                      <label for='cc-name'>Name on card</label>
                      <input
                        type='text'
                        class='form-control'
                        id='cc-name'
                        placeholder=''
                      />
                      <small class='text-muted'>
                        Full name as displayed on card
                      </small>

                      <div class='credit-card'>
                        <label for='cc-number'>Credit card number</label>
                        <input
                          type='text'
                          class='form-control'
                          id='cc-number'
                          placeholder=''
                        />
                      </div>

                      <div class='card-info'>
                        <div class='month'>
                          <label for='cc-expiration'>Month</label>
                          <input
                            type='text'
                            class='form-control'
                            id='cc-expiration'
                            placeholder='Month'
                          />
                        </div>
                        <div class='year'>
                          <label for='cc-cvv'>Year</label>
                          <input
                            type='text'
                            class='form-control'
                            id='cc-cvv'
                            placeholder='Year'
                          />
                        </div>
                        <div class='ccv'>
                          <label for='cc-expiration'>CCV</label>
                          <input
                            type='text'
                            class='form-control'
                            id='cc-expiration'
                            placeholder='CCV'
                          />
                        </div>
                      </div>
                      <div className='button-pay'>
                        <button type='button' className='btn'>
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
    </form>
  );
}
