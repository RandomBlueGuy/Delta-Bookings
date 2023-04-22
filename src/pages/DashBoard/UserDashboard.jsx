import React, { useState } from "react";
import "./UserDashboard.css";
import Mark from "../../assets/Images/markenderes.jpg";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReservationCard from "../AdminDashboard/ReservationCard";

export default function UserDashboard() {
  const [profileEdit, setProfileEdit] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Profile");
  const [dataErrors, setDataErrors] = useState({});
  const [userErrors, setUserErrors] = useState({});
  const [userData, setUserData] = useState({
    fullName: "",
    birthday: "10/10/2000",
    gender: "",
    address: "",
    city: "",
    zip: "",
  });

  const [mainData, setMainData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const { fullName, birthday, gender, address, city, zip } = userData;
  const { email, phone, password } = mainData;
  const numberRegex = /^[0-9]*$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  function handleClick(selection) {
    setSelectedTab(selection);
  }

  function handleClickEdit() {
    setProfileEdit(!profileEdit);
  }

  const handleDataChange = (e) => {
    setMainData({
      ...mainData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewuserinfo = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!fullName.trim()) {
      validationErrors.fullname = "Please enter your email";
    }
    if (!address.trim()) {
      validationErrors.address = "Please enter your address";
    }
    if (!city.trim()) {
      validationErrors.city = "Please enter your city";
    }
    if (!zip.trim()) {
      validationErrors.zip = "Please enter your zip";
    }
    setDataErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      //PUT Request
    }
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const errors = {};

    if (!email.trim()) {
      errors.userEmail = "Please Enter Your Email";
    } else if (!emailRegex.test(email.trim().replace(/\s+/g, ""))) {
      errors.userEmail = "Enter a Valid Email";
    }

    if (!password.trim()) {
      errors.userPassword = "Please Enter Your Password";
    } else if (!passwordRegex.test(password.trim().replace(/\s+/g, ""))) {
      errors.userPassword =
        "Password Must Have This: 8 characters, a number, one uppercase letter and one lowercase letter";
    }

    if (!phone.trim()) {
      errors.userPhone = "Please Enter your Phone Number";
    } else if (!numberRegex.test(phone)) {
      errors.userPhone = "Only numeric characters are accepted";
    } else if (phone.trim().replace(/\s+/g, "").length !== 10) {
      errors.userPhone = "Enter a 10 number digit";
    }
    setUserErrors(errors);

    if (Object.keys(errors).length === 0) {
      //PUT Request
    }
  };

  return (
    <section className='dashboard__ctn'>
      <section className='dashboard__ctn-info'>
        <div className='dashboard__ctn-info-prof'>
          <div className='dashboard__ctn-info-img'>
            <img src={Mark} alt='' />
            <button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          <div className='dashboard__ctn-info-text'>
            <h1>{fullName}</h1>
            <p>[USER PHONE NUMBER]</p>
            <p>[EMAIL]</p>
          </div>
        </div>
        <div className='dashboard__ctn-info-select'>
          <button
            type='button'
            value='Profile'
            className={selectedTab === "Profile" ? "Dashboard-is-active" : ""}
            onClick={(event) => handleClick(event.target.value)}
          >
            Profile
          </button>
          <button
            type='button'
            value='Bookings'
            className={selectedTab === "Bookings" ? "Dashboard-is-active" : ""}
            onClick={(event) => handleClick(event.target.value)}
          >
            Bookings
          </button>
        </div>
      </section>
      <section className='dashboard__ctn-edit'>
        <div className='dashboard__ctn-edit1'>
          <div
            className='dashboard__ctn--profile'
            style={{ display: selectedTab === "Profile" ? "block" : "none" }}
          >
            <div className='dashboard__ctn-info-edit1-title'>
              <h1>Profile</h1>
              <button
                className='dashboard-edit-btn'
                onClick={() => handleClickEdit()}
              >
                Edit
              </button>
              <button>Cancel</button>
              <form onSubmit={handleNewuserinfo}>
                <button type='submit'>Save Changes</button>
              </form>
            </div>

            <form className='dashboard__form' action=''>
              <div className='dashboard__ctn-info-edit1-name'>
                <label htmlFor='fullName'>Name</label>
                <input
                  type='text'
                  id='nombre'
                  name='fullName'
                  value={fullName}
                  onChange={handleChange}
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className='dashboard__ctn-info-edit1-birthday'>
                <label htmlFor='birthday'>Birthday</label>
                <input
                  type='date'
                  name='birthday'
                  id='birthday'
                  value={birthday}
                  onChange={handleChange}
                  placeholder={birthday}
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className='gender'>
                <label htmlFor='dashboard__ctn-info-edit1-genero'>Gender</label>
                <select
                  name='gender'
                  value={gender}
                  onChange={handleChange}
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                >
                  <option value='masculino'>Masculino</option>
                  <option value='femenino'>Femenino</option>
                </select>
              </div>
              <div className='dashboard__ctn-info-edit1-address'>
                <label htmlFor='address'>Street Address</label>
                <input
                  type='text'
                  name='address'
                  value={address}
                  id='address'
                  placeholder='[ADDRESS BASE]'
                  onChange={handleChange}
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className='dashboard__ctn-info-edit1-city'>
                <label htmlFor='city'>City/State</label>
                <input
                  type='text'
                  name='city'
                  value={city}
                  onChange={handleChange}
                  id='city'
                  placeholder='[CITY BASE]'
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className='zip'>
                <label htmlFor='zip'>Zip</label>
                <input
                  type='text'
                  name='zip'
                  id='zip'
                  value={zip}
                  onChange={handleChange}
                  placeholder='[ZIP BASE]'
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
            </form>

            <div className='login-details'>
              <h1>Login Details</h1>
              <form onSubmit={handleInfo}>
                <div className='email'>
                  <label htmlFor='email'>Email Address</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleDataChange}
                  />
                  {userErrors.userEmail && (
                    <span className='error'>{userErrors.userEmail}</span>
                  )}
                  <button className='dashboard-edit-btn'>Edit</button>
                </div>
                <div className='phone'>
                  <label htmlFor='phone'>Phone No:</label>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    value={phone}
                    onChange={handleDataChange}
                  />
                  {userErrors.userPhone && (
                    <span className='error'>{userErrors.userPhone}</span>
                  )}
                  <button className='dashboard-edit-btn'>Edit</button>
                </div>
                <div className='password'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={handleDataChange}
                  />
                  {userErrors.userPassword && (
                    <span className='error'>{userErrors.userPassword}</span>
                  )}
                  <button className='dashboard-edit-btn'>Edit</button>
                </div>
                <button type='submit'>Click </button>
              </form>
            </div>
          </div>

          <div
            className='dashboard__ctn--Bookings'
            style={{ display: selectedTab === "Bookings" ? "flex" : "none" }}
          >
            <h1>My Reservations</h1>
            <div className='reservationDisplay'>
              <ReservationCard />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
