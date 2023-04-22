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

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!cardname.trim()) {
      validationErrors.cardName = "Enter the name that appears on your card";
    } else if (!/^[a-zA-Z]+$/.test(cardname.trim().replace(/\s+/g, ""))) {
      validationErrors.cardName = "Name must only contain letters";
    }

    if (!cardnumber.trim()) {
      validationErrors.cardNumber = "Enter your card's number";
    } else if (!/^[0-9]*$/.test(cardnumber.trim().replace(/\s+/g, ""))) {
      validationErrors.cardNumber = "Only numeric characters are accepted";
    } else if (cardnumber.trim().replace(/\s+/g, "").length !== 16) {
      validationErrors.cardNumber = "Enter a valid card number extension";
    }

    if (!cardmonth.trim()) {
      validationErrors.cardMonth = "Enter the month of expiration";
    } else if (!/^[0-9]*$/.test(cardmonth)) {
      validationErrors.cardMonth = "Only numeric characters are accepted";
    } else if (cardmonth.trim().length !== 2) {
      validationErrors.cardMonth = "Enter a valid month expiration";
    }

    if (!cardyear.trim()) {
      validationErrors.cardYear = "Enter the year of expiration";
    } else if (!/^[0-9]*$/.test(cardyear)) {
      validationErrors.cardYear = "Only numeric characters are accepted";
    } else if (cardyear.trim().length !== 4) {
      validationErrors.cardYear = "Enter a valid Year expiration";
    }

    if (!cardccv.trim()) {
      validationErrors.cardCCV = "Enter your CCV";
    } else if (!/^[0-9]*$/.test(cardccv)) {
      validationErrors.cardCCV = "Only numeric characters are accepted";
    } else if (cardccv.trim().length !== 3) {
      validationErrors.cardCCV = "Enter a valid CCV";
    }

    setErrors(validationErrors);

    if (!Object.keys(validationErrors).length) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          cardname,
          cardnumber,
          cardmonth,
          cardyear,
          cardccv,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));

      setClientInfo({
        cardname: "",
        cardnumber: "",
        cardmonth: "",
        cardyear: "",
        cardccv: "",
      });
      setErrors({});
    }
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
              Credit Card
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <form onSubmit={handleInfo}>
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
                        </label>
                        {errors.cardName && (
                          <span className='error'>{errors.cardName}</span>
                        )}

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
                          </label>
                          {errors.cardNumber && (
                            <span className='error'>{errors.cardNumber}</span>
                          )}
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
                            </label>
                            {errors.cardMonth && (
                              <span className='error'>{errors.cardMonth}</span>
                            )}
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
                            </label>
                            {errors.cardYear && (
                              <span className='error'>{errors.cardYear}</span>
                            )}
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
                            </label>
                            {errors.cardCCV && (
                              <span className='error'>{errors.cardCCV}</span>
                            )}
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
              </form>
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
