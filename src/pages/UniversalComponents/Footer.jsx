import React from "react";
import "./Footer.css";
import GoogleMapReact from "google-map-react";
import icon from "../../assets/Icons/delta.svg";
import locationIcon from "../../assets/Icons/location.svg";
import phoneIcon from "../../assets/Icons/phone.svg";
import mailIcon from "../../assets/Icons/mail.svg";
import placeholder from "../../assets/placeholder.png";
import tIcon from "../../assets/Icons/twitter.svg";
import fIcon from "../../assets/Icons/facebook.svg";
import iIcon from "../../assets/Icons/instagram.svg";
import gIcon from "../../assets/Icons/google.svg";
import { Link } from "react-router-dom";

const prompt = ({ text }) => <div>{text}</div>;

function Footer() {
  const OurLocation = {
    center: {
      lat: 6.266716684592229,
      lng: -75.58217656599909,
    },
    zoom: 12,
  };

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
            <Link to="">About Us</Link>
            <Link to="">FAQ</Link>
            <Link to="">Login</Link>
            <Link to="">Register</Link>
            <Link to="">Terms & Co.</Link>
            <Link to="">Privacy</Link>
            <Link to="">Support</Link>
          </div>
        </section>

        <section className="box-member B1">
          <div className="box-title">
            <h2>Our Location</h2>
          </div>
          <div className="box-body">
            <div className="map-box">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={OurLocation.center}
                defaultZoom={OurLocation.zoom}
              >
                <prompt
                  lat={6.266716684592229}
                  lng={-75.58217656599909}
                  text="Our Location"
                />
              </GoogleMapReact>
            </div>
          </div>
        </section>

        <section className="box-member B3">
          <div className="box-title">
            <h2>Useful Links</h2>
          </div>
          <div className="box-body">
            <Link to="">Home</Link>
            <Link to="">Our Vehical</Link>
            <Link to="">Latest Video</Link>
            <Link to="">Services</Link>
            <Link to="">Booking Deal</Link>
            <Link to="">Emergency Call</Link>
            <Link to="">Mobile App</Link>
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
          <Link to="">
            <img src={fIcon} alt="" className="social-btn" />
          </Link>
          <Link to="">
            <img src={tIcon} alt="" className="social-btn" />
          </Link>
          <Link to="">
            <img src={iIcon} alt="" className="social-btn" />
          </Link>
          <Link to="">
            <img src={gIcon} alt="" className="social-btn" />
          </Link>
        </div>
        <div className="copyright">
          <p>Copyright 2023 Delta By 💙 Delta Team</p>
        </div>
      </div>
    </main>
  );
}

export default Footer;
