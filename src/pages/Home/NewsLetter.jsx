import React, { useEffect, useState } from "react";
import "./NewsLetter.css";
import placeholderImg from "../../assets/Images/NewsLetter-placeholder.png";
import placeholder2Img from "../../assets/Images/NewsLetter-placeholder2.png";

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
          data[parseInt(Math.random() * 15)].About.Reviews[
            parseInt(Math.random() * 3)
          ]
        )
      );

    fetch("/DB/HotelDataBase.json")
      .then((response) => response.json())
      .then((data) =>
        setReview2(
          data[parseInt(Math.random() * 15)].About.Reviews[
            parseInt(Math.random() * 3)
          ]
        )
      );
  }, []);

  return (
    <main className="NewsLetter-container">
      <section className="NewsLetter-table">
        <div className="card-ctn-nl">
          <figure className="card-ctn-nl-img-container">
            <img src={placeholderImg} alt="" />
            <figcaption className="date-review">
              <h1>{(r1Date.getDay() + 1).toString().padStart(2, "0")}</h1>
              <p>
                {r1Date
                  .toLocaleString(undefined, { month: "long" })
                  .slice(0, 3)}
              </p>
            </figcaption>
          </figure>
          <div className="card-ctn-nl-txt-container">
            <p className="reviewer">Posted by: {review1.User}</p>
            <p className="review">User Rating: {review1.Rating}/5</p>
            <p className="sub">{review1.HotelReview}</p>
            <button type="button" className="more">
              READ MORE
            </button>
          </div>
        </div>
        <div className="card-ctn-nl">
          <figure className="card-ctn-nl-img-container">
            <img src={placeholder2Img} alt="" />
            <figcaption className="date-review">
              <h1>{(r2Date.getDay() + 1).toString().padStart(2, "0")}</h1>
              <p>
                {r2Date
                  .toLocaleString(undefined, { month: "long" })
                  .slice(0, 3)}
              </p>
            </figcaption>
          </figure>
          <div className="card-ctn-nl-txt-container">
            <p className="reviewer">Posted by: {review2.User}</p>
            <p className="review">User Rating: {review2.Rating}/5</p>
            <p className="sub">{review2.HotelReview}</p>

            <button type="button" className="more">
              READ MORE
            </button>
          </div>
        </div>
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
