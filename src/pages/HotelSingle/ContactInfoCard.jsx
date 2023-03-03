import React from "react";
import "./ContactInfoCard.css";
import tIcon from "../../assets/Icons/twitter.svg";
import fIcon from "../../assets/Icons/facebook.svg";
import iIcon from "../../assets/Icons/instagram.svg";
import gIcon from "../../assets/Icons/google.svg";
import locationIcon from "../../assets/Icons/location.svg";
import phoneIcon from "../../assets/Icons/phone.svg";
import mailIcon from "../../assets/Icons/mail.svg";

function ContactInfoCard() {
  return (
    
        <section className="contact__info">
          <div className="contact__info-title">
            <h1>Contact Info</h1>
          </div>

          <div className="contact__info-body">
            <div className="contact__info-display-icon">
              <img src={locationIcon} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="contact__info-display-icon">
              <img src={phoneIcon} alt="" />
              <p>123 254 121</p>
            </div>
            <div className="contact__info-display-icon">
              <img src={mailIcon} alt="" />
              <p>contact@seaview.com</p>
            </div>

            <div className="contact__info-social">
              <img src={fIcon} alt="" />
              <img src={iIcon} alt="" />
              <img src={tIcon} alt="" />
              <img src={gIcon} alt="" />
            </div>
            <div className="contact__info-check">
              <input className="contact__info-check-text
              "
                type="text"
                name="checkin"
                id="checkin"
                value={"Check-In: 2:00 PM"}
              />
              <input className="contact__info-check-text"
                type="text"
                name="checkout"
                id="checkout"
                value={"Check-Out: 12:00 PM"}
              />
            </div>
          </div>
        </section>
      
  );
}

export default ContactInfoCard;
