import React, { useEffect, useState } from "react";
import "./NewsLetter.css";

import ReviewCard from "./ReviewCard";

function NewsLetter() {
  const [review1, setReview1] = useState({});
  const [review2, setReview2] = useState({});
  const r1Date = new Date(review1.Date);
  const r2Date = new Date(review2.Date);

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

  return (
    <main className="NewsLetter-container">
      <section className="NewsLetter-table">
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

      <form action="" className="subscribe-form">
        <section className="sub-call-txt">
          <div className="call-txt-title">
            <div className="our-news">
              <p>OUR NEWS</p>
            </div>
            <h1>Subscribe Our News</h1>
          </div>
          <p className="call-txt-title-paragraph">
            Subscribe and receive our newsletters to follow the new Promise
            about our fresh and fantastic products
          </p>
        </section>
        <form className="form-input">
          <input
            className="input-mail"
            type="text"
            placeholder={"Enter Your Email"}
          />
          <button type="button" className="sub-btn">
            Subscribe
          </button>
        </form>
      </form>
    </main>
  );
}

export default NewsLetter;
