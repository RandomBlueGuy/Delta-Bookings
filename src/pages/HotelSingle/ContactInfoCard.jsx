import React from "react";
import "./ContactInfoCard.css";
import tIcon from "../../assets/Icons/twitter.svg";
import fIcon from "../../assets/Icons/facebook.svg";
import iIcon from "../../assets/Icons/instagram.svg";
import gIcon from "../../assets/Icons/google.svg";
import locationIcon from "../../assets/Icons/location.svg";
import phoneIcon from "../../assets/Icons/phone.svg";
import mailIcon from "../../assets/Icons/mail.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ContactInfoCard({ currentHotel }) {
  return (
    <section className="contact__info">
      <div className="contact__info-title">
        <h1>Contact Info</h1>
      </div>

      <div className="contact__info-body">
        <div className="contact__info-display-icon">
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            {currentHotel.loc_City}
          </p>
        </div>
        <div className="contact__info-display-icon">
          <p>
            <FontAwesomeIcon icon={faPhone} />
            {currentHotel.CountryCode} {currentHotel.PhoneNumber}
          </p>
        </div>
        <div className="contact__info-display-icon">
          <p>
            <FontAwesomeIcon icon={faMailBulk} />
            {currentHotel.Email}
          </p>
        </div>

        <div className="contact__info-social">
          <Link to={currentHotel.SN_Facebook}>
            <img src={fIcon} alt="" />
          </Link>
          <Link to={currentHotel.SN_Instagram}>
            <img src={iIcon} alt="" />
          </Link>
          <Link to={currentHotel.SN_Twitter}>
            <img src={tIcon} alt="" />
          </Link>
          <Link to={currentHotel.SN_Pinterest}>
            <img src={gIcon} alt="" />
          </Link>
        </div>
        <div className="contact__info-check">
          <input
            className="contact__info-check-text"
            type="text"
            name="checkin"
            id="checkin"
            value={"Check-In: [DATE]"}
          />
          <input
            className="contact__info-check-text"
            type="text"
            name="checkout"
            id="checkout"
            value={"Check-Out: [DATE]"}
          />
        </div>
      </div>
    </section>
  );
}

export default ContactInfoCard;
