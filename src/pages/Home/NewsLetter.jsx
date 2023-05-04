import React, { useEffect, useState } from "react";
import "./NewsLetter.css";
import axios from "axios";

import ReviewCard from "./ReviewCard";

function NewsLetter() {
  const [review1, setReview1] = useState({});
  const [review2, setReview2] = useState({});
  const r1Date = new Date(review1.Date);
  const r2Date = new Date(review2.Date);
  const [inputEmail, setInputEmail] = useState("");
  const [Errors, setErrors] = useState({});
  const DB_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch("/DB/HotelDataBase.json")
      .then((response) => response.json())
      .then((data) =>
        setReview1(
          data[parseInt(Math.random() * 15)].Reviews[
            parseInt(Math.random() * 3)
          ]
        )
      );

    fetch("/DB/HotelDataBase.json")
      .then((response) => response.json())
      .then((data) =>
        setReview2(
          data[parseInt(Math.random() * 15)].Reviews[
            parseInt(Math.random() * 3)
          ]
        )
      );
  }, []);

  const sendEmail = async () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!inputEmail.trim()) {
      validationErrors.emailerror = "Please, enter your email";
    } else if (!emailRegex.test(inputEmail)) {
      validationErrors.emailerror = "Enter a valid email";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const res = await axios
        .post(`${DB_URL}/api/emailsubscription`, {
          Email: inputEmail,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
      setInputEmail("");
    }
  };

  return (
    <main className='NewsLetter-container'>
      <section className='NewsLetter-table'>
        <ReviewCard
          placeholderImg={"1"}
          dateD={(r1Date.getDay() + 1).toString().padStart(2, "0")}
          dateM={r1Date
            .toLocaleString(undefined, { month: "long" })
            .slice(0, 3)}
          user={review1.User}
          rating={review1.Rating}
          review={review1.HotelReview}
        />

        <ReviewCard
          placeholderImg={"2"}
          dateD={(r2Date.getDay() + 1).toString().padStart(2, "0")}
          dateM={r2Date
            .toLocaleString(undefined, { month: "long" })
            .slice(0, 3)}
          user={review2.User}
          rating={review2.Rating}
          review={review2.HotelReview}
        />
      </section>

      <div action='' className='subscribe-form'>
        <section className='sub-call-txt'>
          <div className='call-txt-title'>
            <div className='our-news'>
              <p>OUR NEWS</p>
            </div>
            <h1>Subscribe Our News</h1>
          </div>
          <p className='call-txt-title-paragraph'>
            Subscribe and receive our newsletters to follow the new Promise
            about our fresh and fantastic booking offers
          </p>
        </section>
        <form className='form-input'>
          <input
            className='input-mail'
            type='text'
            placeholder='Enter Your Email'
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <button type='button' className='sub-btn' onClick={sendEmail}>
            Subscribe
          </button>
          {Errors.emailerror && (
            <span className='error'>{Errors.emailerror}</span>
          )}
        </form>
      </div>
    </main>
  );
}

export default NewsLetter;
