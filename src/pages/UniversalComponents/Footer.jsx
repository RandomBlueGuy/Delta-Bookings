import React from "react";
import "./Footer.css";

import icon from "../../assets/Icons/delta.svg";
import locationIcon from "../../assets/Icons/location.svg";
import phoneIcon from "../../assets/Icons/phone.svg";
import mailIcon from "../../assets/Icons/mail.svg";
import placeholder from "../../assets/placeholder.png";
import tIcon from "../../assets/Icons/twitter.svg";
import fIcon from "../../assets/Icons/facebook.svg";
import iIcon from "../../assets/Icons/instagram.svg";
import gIcon from "../../assets/Icons/google.svg";

function Footer() {
  return (
    <main className="ctn-footer">
      <div className="main-box">
        <section className="box-member B2">
          <div className="box-title">
            <div className="display-logo">
              <img src={icon} className="back" alt="company icon" />
            </div>
          </div>

          <div className="box-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p></p>

            <div className="display-icon">
              <img src={locationIcon} alt="" />
              <p>[LOCATION]</p>
            </div>
            <div className="display-icon">
              <img src={phoneIcon} alt="" />
              <p>[PHONE]</p>
            </div>
            <div className="display-icon">
              <img src={mailIcon} alt="" />
              <p>contact-mail@xmail.com</p>
            </div>
          </div>
        </section>

        <section className="box-member B3">
          <div className="box-title">
            <h2>About</h2>
          </div>
          <div className="box-body">
            <a href="">About Us</a>
            <a href="">FAQ</a>
            <a href="">Login</a>
            <a href="">Register</a>
            <a href="">Terms & Co.</a>
            <a href="">Privacy</a>
            <a href="">Support</a>
          </div>
        </section>

        <section className="box-member B1">
          <div className="box-title">
            <h2>Our Location</h2>
          </div>
          <div className="box-body">
            <div className="map-box"></div>
          </div>
        </section>

        <section className="box-member B3">
          <div className="box-title">
            <h2>Useful Links</h2>
          </div>
          <div className="box-body">
            <a href="">Home</a>
            <a href="">Our Vehical</a>
            <a href="">Latest Video</a>
            <a href="">Services</a>
            <a href="">Booking Deal</a>
            <a href="">Emergency Call</a>
            <a href="">Mobile App</a>
          </div>
        </section>

        <section className="box-member B1">
          <div className="box-title">
            <h2>New Topics</h2>
          </div>
          <div className="box-body">
            <div className="news-box">
              <div className="news-box-img">
                <div className="display-img">
                  <img src={placeholder} alt="" />
                </div>
              </div>
              <div className="news-box-txt">
                <h2>Recent News</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="news-box">
              <div className="news-box-img">
                <div className="display-img">
                  <img src={placeholder} alt="" />
                </div>
              </div>
              <div className="news-box-txt">
                <h2>Recent News</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="secondary-box">
        <div className="social-buttons">
          <a href="">
            <img src={fIcon} alt="" className="social-btn" />
          </a>
          <a href="">
            <img src={tIcon} alt="" className="social-btn" />
          </a>
          <a href="">
            <img src={iIcon} alt="" className="social-btn" />
          </a>
          <a href="">
            <img src={gIcon} alt="" className="social-btn" />
          </a>
        </div>
        <div className="copyright">
          <p>
            Copyright 2023 Delta By <span className="heart"> ♥</span> Yo
            Merenguez
          </p>
        </div>
      </div>
    </main>
  );
}

export default Footer;
