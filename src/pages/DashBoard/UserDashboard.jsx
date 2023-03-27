import React from "react";
import "./UserDashboard.css";
import Mark from "../../assets/Images/markenderes.jpg";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function UserDashboard() {
  const [profileEdit, setProfileEdit] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Profile");

  function handleClick(selection) {
    setSelectedTab(selection);
  }

  function handleClickEdit() {
    setProfileEdit(!profileEdit);
    console.log(profileEdit);
  }

  return (
    <section className="dashboard__ctn">
      <section className="dashboard__ctn-info">
        <div className="dashboard__ctn-info-prof">
          <div className="dashboard__ctn-info-img">
            <img src={Mark} alt="" />
            <button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          <div className="dashboard__ctn-info-text">
            <h1>[USER NAME]</h1>
            <p>[USER PHONE NUMBER]</p>
            <p>[EMAIL]</p>
          </div>
        </div>
        <div className="dashboard__ctn-info-select">
          <button
            type="button"
            value="Profile"
            className={selectedTab === "Profile" ? "Dashboard-is-active" : ""}
            onClick={(event) => handleClick(event.target.value)}
          >
            Profile
          </button>
          <button
            type="button"
            value="Bookings"
            className={selectedTab === "Bookings" ? "Dashboard-is-active" : ""}
            onClick={(event) => handleClick(event.target.value)}
          >
            Bookings
          </button>
          <button
            type="button"
            value="Manage"
            className={selectedTab === "Manage" ? "Dashboard-is-active" : ""}
            onClick={(event) => handleClick(event.target.value)}
          >
            Manage Hotels
          </button>
        </div>
      </section>
      <section className="dashboard__ctn-edit">
        <div className="dashboard__ctn-edit1">
          <div
            className="dashboard__ctn--profile"
            style={{ display: selectedTab === "Profile" ? "block" : "none" }}
          >
            <div className="dashboard__ctn-info-edit1-title">
              <h1>Profile</h1>
              <button
                className="dashboard-edit-btn"
                onClick={() => handleClickEdit()}
              >
                Edit
              </button>
              <button>Cancel</button>
              <button>Save Changes</button>
            </div>
            <form action="">
              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="nombre">Name</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value="[NOMBRE BASE]"
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className="dashboard__ctn-info-edit1-birthday">
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  placeholder="[BIRTHDAY BASE]"
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className="gender">
                <label htmlFor="dashboard__ctn-info-edit1-genero">Gender</label>
                <select
                  name="genero"
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                >
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </div>
              <div className="dashboard__ctn-info-edit1-address">
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="[ADDRESS BASE]"
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className="dashboard__ctn-info-edit1-city">
                <label htmlFor="city">City/State</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="[CITY BASE]"
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className="zip">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="[ZIP BASE]"
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
            </form>
            <div className="login-details">
              <h1>Login Details</h1>
              <form action="">
                <div className="email">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" />
                  <button className="dashboard-edit-btn">Edit</button>
                </div>
                <div className="phone">
                  <label htmlFor="phone">Phone No:</label>
                  <input type="tel" name="phone" id="phone" />
                  <button className="dashboard-edit-btn">Edit</button>
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" />
                  <button className="dashboard-edit-btn">Edit</button>
                </div>
              </form>
            </div>
          </div>

          <div
            className="dashboard__ctn--Bookings"
            style={{ display: selectedTab === "Bookings" ? "flex" : "none" }}
          >
            <h1>Booking Summary</h1>
            <p className="">
              <span className="Booking__info--title">
                <strong>Hotel Name:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>Location:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>Room type:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>Check-in Date:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>Check-out Date:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>

            <p className="">
              <span className="Booking__info--title">
                <strong>Guest Number:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>PaymentDetails:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>Base price:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>Discount:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>Tax & Service Fees:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
            <p className="">
              <span className="Booking__info--title">
                <strong>Final price:</strong>
              </span>
              {`  [ANSWER]  `}
            </p>
          </div>

          <div
            className="dashboard__ctn--ManageHotels"
            style={{ display: selectedTab === "Manage" ? "flex" : "none" }}
          >
            <h1>Hotel Managing</h1>
                
            <p className="">MEGA FORM</p>
          </div>
        </div>
      </section>
    </section>
  );
}
