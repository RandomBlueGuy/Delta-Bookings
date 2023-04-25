import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import Mark from "../../assets/Images/markenderes.jpg";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReservationCard from "../AdminDashboard/ReservationCard";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import WarningMessage from "../UniversalComponents/WarningMessage";
import FloatingMessage from "../UniversalComponents/FloatingMessage";

export default function UserDashboard() {
  const [editState1, setEditState1] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Profile");
  const [dataErrors, setDataErrors] = useState({});
  const [userErrors, setUserErrors] = useState({});
  const [initialUserData, setInitialUserData] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);
  const numberRegex = /^[0-9]*$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [cookies] = useCookies("cookieToken");
  const decode = useJwt(cookies.cookieToken);
  const [showWarning, setShowWarning] = useState(false);
  const [warningResult, setWarningResult] = useState(false);
  const [picture, setPicture] = useState(null);
  const [image, setImage] = useState(null);

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "",
    streetAddress: "",
    city: "",
    zipCode: "",
  });

  const {
    fullName,
    email,
    phoneNumber,
    password,
    gender,
    streetAddress,
    city,
    zipCode,
  } = userData;

  useEffect(() => {
    if (decode && decode.decodedToken && decode.decodedToken.id) {
      const id = decode.decodedToken.id;
      axios
        .get(`http://localhost:8080/api/users/${id}`)
        .then((response) => {
          setUserData({
            fullName: response.data.data.fullName,
            email: response.data.data.email,
            phoneNumber: response.data.data.phoneNumber,
            password: response.data.data.password,
            gender: response.data.data.gender || "non binary",
            streetAddress: response.data.data.streetAddress,
            city: response.data.data.city,
            zipCode: response.data.data.zipCode,
          });
          setInitialUserData({
            fullName: response.data.data.fullName,
            email: response.data.data.email,
            phoneNumber: response.data.data.phoneNumber,
            password: response.data.data.password,
            gender: response.data.data.gender,
            streetAddress: response.data.data.streetAddress,
            city: response.data.data.city,
            zipCode: response.data.data.zipCode,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [decode.decodedToken]);

  useEffect(() => {
    if (warningResult) {
      setProfileEdit(false);
      setEditState1(false);
      axios
        .put(
          `http://localhost:8080/api/users/${decode.id}`,
          {
            fullName,
            gender,
            streetAddress,
            city,
            zipCode,
            phoneNumber,
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.cookieToken}`,
            },
          }
        )
        .then((response) => {
          console.log("Success");
          setShowUpdate(true);
        })
        .catch((error) => console.log(error.message));
      setWarningResult(false);
    }
    setInitialUserData(userData);
  }, [warningResult]);

  function handleClick(selection) {
    setSelectedTab(selection);
  }

  function handleClickEdit() {
    setProfileEdit(true);
  }

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

  const handlePic = (e) => {
    readFile(e.target.files[0]);
    setPicture(e.target.files);
  };

  const editPicture = async () => {
    const data = new FormData();
    data.append("username", fullName);
    for (let i = 0; i < picture.length; i++) {
      data.append(`file:${i}`, picture[i], picture[i].name);
    }
    axios.put(
      `http://localhost:8080/api/users/${decode.id}`,
      {
        picture,
      },
      {
        headers: {
          Authorization: `Bearer ${cookies.cookieToken}`,
        },
      }
    );

    const response = await axios.post(
      "http://localhost:8080/test-formdata",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  const handleNewuserinfo = (event) => {
    const validationErrors = {};
    // if (!fullName.trim()) {
    //   validationErrors.fullName = "Please enter your name";
    // }
    // if (!streetAddress.trim()) {
    //   validationErrors.streetAddress = "Please enter your address";
    // }
    // if (!city.trim()) {
    //   validationErrors.city = "Please enter your city";
    // }
    // if (!zipCode.trim()) {
    //   validationErrors.zipCode = "Please enter your zip";
    // }

    setDataErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowWarning(true);
    }
  };

  // const handleInfo = (event) => {
  //   event.preventDefault();
  //   const errors = {};

  //   if (!email.trim()) {
  //     errors.userEmail = "Please Enter Your Email";
  //   } else if (!emailRegex.test(email.trim().replace(/\s+/g, ""))) {
  //     errors.userEmail = "Enter a Valid Email";
  //   }

  //   if (!password.trim()) {
  //     errors.userPassword = "Please Enter Your Password";
  //   } else if (!passwordRegex.test(password.trim().replace(/\s+/g, ""))) {
  //     errors.userPassword =
  //       "Password Must Have This: 8 characters, a number, one uppercase letter and one lowercase letter";
  //   }

  //   if (!phoneNumber.trim()) {
  //     errors.userphoneNumber = "Please Enter your phoneNumber Number";
  //   } else if (!numberRegex.test(phoneNumber)) {
  //     errors.userphoneNumber = "Only numeric characters are accepted";
  //   } else if (phoneNumber.trim().replace(/\s+/g, "").length !== 10) {
  //     errors.userphoneNumber = "Enter a 10 number digit";
  //   }
  //   setUserErrors(errors);

  //   if (Object.keys(errors).length === 0) {
  //     //PUT Request
  //   }
  // };

  function handleCancel() {
    setUserData(initialUserData);
  }

  return (
    <section className='dashboard__ctn'>
      {showUpdate && (
        <FloatingMessage
          message='Profile Updated!'
          setShowUpdate={setShowUpdate}
          showUpdate={showUpdate}
        />
      )}
      {showWarning && (
        <WarningMessage
          warningMessage={
            "You are going to make permanent changes to your current profile information."
          }
          warningTitle={"Submit changes to profile"}
          setShowWarning={setShowWarning}
          setWarningResult={setWarningResult}
        />
      )}
      <section className='dashboard__ctn-info'>
        <div className='dashboard__ctn-info-prof'>
          <div className='dashboard__ctn-info-img'>
            <img src={image} alt='' />

            <button>
              <FontAwesomeIcon icon={faPenToSquare} onClick={editPicture} />
            </button>
          </div>

          <label htmlFor='file'>Edit Picture</label>
          <input
            type='file'
            accept='image/*'
            multiple
            name='file'
            id='file'
            max-size='200'
            onChange={handlePic}
          />

          <div className='dashboard__ctn-info-text'>
            <h1>{initialUserData.fullName || "User"}</h1>
            <p>{initialUserData.email || "Email"}</p>
            <p>{initialUserData.phoneNumber || "Phone"}</p>
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
              <div className='dashboard__Btng'>
                {editState1 === false && (
                  <button
                    className='dashboard-edit-btn'
                    onClick={() => {
                      setEditState1(true);
                      handleClickEdit();
                    }}
                  >
                    Edit
                  </button>
                )}
                {editState1 === true && (
                  <button
                    onClick={() => {
                      setEditState1(false);
                      setProfileEdit(false);
                      handleCancel();
                    }}
                  >
                    Cancel
                  </button>
                )}
                <form onSubmit={handleNewuserinfo}>
                  {editState1 === true && (
                    <button
                      type='submit'
                      onClick={(event) => {
                        event.preventDefault();
                        handleNewuserinfo();
                      }}
                    >
                      Save Changes
                    </button>
                  )}
                </form>
              </div>
            </div>
            <form className='dashboard__form' action=''>
              <div className='dashboard__ctn-info-edit1-name'>
                <label htmlFor='fullName'>Email</label>
                <input
                  value={email}
                  disabled
                  className='Dashboard-ctn-isDisabled'
                />
              </div>
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

              <div className='dashboard__ctn-info-edit1-name'>
                <label
                  htmlFor='phoneNumber'
                  className='dashboard__ctn-info-edit1-name'
                >
                  Phone number
                </label>
                <input
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  disabled={!profileEdit}
                  value={phoneNumber}
                  onChange={handleChange}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
                {/* {userErrors.userphoneNumber && (
                  <span className="error">{userErrors.userphoneNumber}</span>
                )} */}
              </div>

              <div className='dashboard__ctn-info-edit1-name'>
                <label htmlFor='password'>Password</label>
                <input
                  type={profileEdit === false ? "password" : "text"}
                  name='password'
                  id='password'
                  disabled={!profileEdit}
                  value={password}
                  onChange={handleChange}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
                {userErrors.userPassword && (
                  <span className='error'>{userErrors.userPassword}</span>
                )}
              </div>

              <div className='dashboard__ctn-info-edit1-name'>
                <label htmlFor='gender'>Gender</label>
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
                  <option value='Masculino'>Masculino</option>
                  <option value='Femenino'>Femenino</option>
                  <option value='Non Binary'>Non Binary</option>
                </select>
              </div>
              <div className='dashboard__ctn-info-edit1-name'>
                <label htmlFor='streetAddress'>Street Address</label>
                <input
                  type='text'
                  name='streetAddress'
                  value={streetAddress}
                  id='streetAddress'
                  placeholder={streetAddress}
                  onChange={handleChange}
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className='dashboard__ctn-info-edit1-name'>
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
              <div className='dashboard__ctn-info-edit1-name'>
                <label htmlFor='zipCode'>Zip</label>
                <input
                  type='text'
                  name='zipCode'
                  id='zipCode'
                  value={zipCode}
                  onChange={handleChange}
                  placeholder={zipCode}
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
            </form>
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
