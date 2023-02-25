import React from "react";
import "./NewsLetter.css";
import placeholderImg from "../../assets/Images/NewsLetter-placeholder.png";
import placeholder2Img from "../../assets/Images/NewsLetter-placeholder2.png";

function NewsLetter() {
  function randomDate(x) {
    const rDate = new Date(Math.floor(Math.random() * Date.now()));
    return x === true
      ? rDate
          .toLocaleString(undefined, { month: "long" })
          .toUpperCase()
          .slice(0, 3)
      : rDate.getDay().toString().padStart(2, "0");
  }

  return (
    <main className="NewsLetter-container">
      <section className="NewsLetter-table">
        <div className="card">
          <figure className="card-img-container">
            <img src={placeholderImg} alt="" />
            <figcaption className="date-review">
              <h1>{randomDate(false)}</h1>
              <p>{randomDate(true)}</p>
            </figcaption>
          </figure>
          <div className="card-txt-container">
            <p className="reviewer">Posted by: Julia Holmes</p>
            <p className="review">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="sub">Lorem Ipsum is simply dummy text</p>

            <button type="button" className="more">
              READ MORE
            </button>
          </div>
        </div>
        <div className="card">
          <figure className="card-img-container">
            <img src={placeholder2Img} alt="" />
            <figcaption className="date-review">
              <h1>{randomDate(false)}</h1>
              <p>{randomDate(true)}</p>
            </figcaption>
          </figure>
          <div className="card-txt-container">
            <p className="reviewer">Posted by: Julia Holmes</p>
            <p className="review">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="sub">Lorem Ipsum is simply dummy text</p>

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
        <section className="form-input">
          <input
            className="input-mail"
            type="text"
            placeholder={"Enter Your Email"}
          />
          <button type="button" className="sub-btn">
            Subscribe
          </button>
        </section>
      </form>
    </main>
  );
}

export default NewsLetter;
