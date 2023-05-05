import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReservationCard from "../AdminDashboard/ReservationCard";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import WarningMessage from "../UniversalComponents/WarningMessage";
import FloatingMessage from "../UniversalComponents/FloatingMessage";
import UserImgPlaceholder from "../../assets/Images/user.svg";

export default function UserDashboard() {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [editState1, setEditState1] = useState(false);
  const [editState2, setEditState2] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);
  const [profileEdit2, setProfileEdit2] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Profile");
  const [initialUserData, setInitialUserData] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);
  const [cookies] = useCookies("cookieToken");
  const decode = useJwt(cookies.cookieToken);
  const [picture, setPicture] = useState("");
  const [image, setImage] = useState("");
  const [bookingsArr, setBookingsArr] = useState([]);
  const [changeImage, setChangeImage] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningResult, setWarningResult] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [warningTitle, setWarningTitle] = useState("");
  const [shouldUpdate, setShouldUpdate] = useState("");
  const [dataErrors, setDataErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    streetAddress: "",
    city: "",
    zipCode: "",
  });

  const { fullName, email, phoneNumber, gender, streetAddress, city, zipCode } =
    userData;

  const numberRegex = /^[0-9]*$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  function handlePic(e) {
    readFile(e.target.files[0]);
    setPicture(e.target.files);
    setChangeImage(true);
  }

  useEffect(() => {
    if (changeImage === true) {
      setChangeImage(false);
      const editPicture = async () => {
        const data = new FormData();
        data.append("username", fullName);
        for (let i = 0; i < picture.length; i++) {
          data.append(`file:${i}`, picture[i], picture[i].name);
        }

        const response = await axios.post(`${DB_URL}/test-formdata`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const newURL = response.data["file:0"];

        await axios
          .put(
            `${DB_URL}/api/users/${decode.id}/picture`,
            {
              picture: newURL,
            },
            {
              headers: {
                Authorization: `Bearer ${cookies.cookieToken}`,
              },
            }
          )
          .then((response) => {
            setPicture(response.data.data.picture);
          });
      };
      editPicture();
    }
  }, [changeImage]);

  useEffect(() => {
    if (decode && decode.decodedToken && decode.decodedToken.id) {
      const id = decode.decodedToken.id;
      axios
        .get(`${DB_URL}/api/users/${id}`)
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
          setPicture(response.data.data.picture);
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
          setBookingsArr(response.data.data.bookings);
        })
    }
  }, [decode.decodedToken]);

  useEffect(() => {
    if (warningResult) {
      setProfileEdit(false);
      setEditState1(false);
      setProfileEdit2(false);
      setEditState2(false);

      if (shouldUpdate === "Profile") {
        axios
          .put(
            `${DB_URL}/api/users/${decode.id}`,
            {
              fullName,
              gender,
              streetAddress,
              city,
              zipCode,
              phoneNumber,
            },
            {
              headers: {
                Authorization: `Bearer ${cookies.cookieToken}`,
              },
            }
          )
          .then((response) => {
            setShowUpdate(true);
          })

        setWarningResult(false);
        setInitialUserData(userData);

      } else {
        axios
          .put(
            `${DB_URL}/api/users/${decode.id}/password`,
            {
              password,
            },
            {
              headers: {
                Authorization: `Bearer ${cookies.cookieToken}`,
              },
            }
          )
          .then((response) => {
            setShowUpdate(true);
          })
          
        setWarningResult(false);
        setPassword("");
        setPassword2("");
      }
    }
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

  const handleNewuserinfo = (event) => {
    const validationErrors = {};
    if (!fullName.trim()) {
      validationErrors.fullName = "Please enter your name";
    }
    if (!streetAddress.trim()) {
      validationErrors.streetAddress = "Please enter your address";
    }
    if (!city.trim()) {
      validationErrors.city = "Please enter your city";
    }
    if (!zipCode.trim()) {
      validationErrors.zipCode = "Please enter your zip";
    }

    if (!phoneNumber.trim()) {
      validationErrors.phoneNumber = "Please Enter your phone Number";
    } else if (!numberRegex.test(phoneNumber)) {
      validationErrors.phoneNumber = "Only numeric characters are accepted";
    } else if (phoneNumber.trim().replace(/\s+/g, "").length !== 10) {
      validationErrors.phoneNumber = "Enter a 10 number digit";
    }

    setDataErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowWarning(true);
      setWarningTitle("Submit changes to profile");
      setWarningMessage(
        "You are going to make permanent changes to your current profile information."
      );
    }
  };

  function handleCancel() {
    setUserData(initialUserData);
  }

  function handleNewPassword() {
    const passErrors = {};
    if (!password.trim() || !password2.trim()) {
      passErrors.password = "Both fields must not be blank";
    } else if (
      !passwordRegex.test(password.trim().replace(/\s+/g, "")) ||
      !passwordRegex.test(password2.trim().replace(/\s+/g, ""))
    ) {
      passErrors.password =
        "Passwords must have 8 characters, a number, one uppercase letter and one lowecase letter";
    } else if (password !== password2) {
      passErrors.password = "Passwords must be the same";
    }

    setPasswordErrors(passErrors);

    if (Object.keys(passErrors).length === 0) {
      if (password === password2) {
        setWarningTitle("Password Update");
        setShowWarning(true);
        setWarningMessage("You are going to change your password permanently.");
      }
    }
  }

  return (
    <section className="dashboard__ctn">
      {showUpdate && (
        <FloatingMessage
          message={`${shouldUpdate} Updated!`}
          setShowUpdate={setShowUpdate}
          showUpdate={showUpdate}
        />
      )}
      {showWarning && (
        <WarningMessage
          warningMessage={warningMessage}
          warningTitle={warningTitle}
          setShowWarning={setShowWarning}
          setWarningResult={setWarningResult}
        />
      )}
      <section className="dashboard__ctn-info">
        <div className="dashboard__ctn-info-prof">
          <div className="dashboard__ctn-info-img">
            <img
              src={picture ? picture : UserImgPlaceholder}
              className="profile__img"
              alt=""
            />
            <label htmlFor="file">
              <FontAwesomeIcon icon={faPenToSquare} />
            </label>
          </div>
          <input
            type="file"
            accept="image/*"
            name="file"
            id="file"
            max-size="200"
            onChange={handlePic}
            style={{ display: "none" }}
          />

          <div className="dashboard__ctn-info-text">
            <h1>{initialUserData.fullName || "User"}</h1>
            <p>{initialUserData.email || "Email"}</p>
            <p>{initialUserData.phoneNumber || "Phone"}</p>
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
              <div className="dashboard__Btng">
                {editState1 === false && (
                  <button
                    className="dashboard-edit-btn"
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
                      type="submit"
                      onClick={(event) => {
                        event.preventDefault();
                        setShouldUpdate("Profile");
                        handleNewuserinfo();
                      }}
                    >
                      Save
                    </button>
                  )}
                </form>
              </div>
            </div>
            <form className="dashboard__form" action="">
              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="fullName">Email</label>
                <input
                  value={email}
                  disabled
                  className="Dashboard-ctn-isDisabled"
                />
              </div>
              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  id="nombre"
                  name="fullName"
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
              {dataErrors.fullName && (
                <span className="error-creatorUser">{dataErrors.fullName}</span>
              )}

              <div className="dashboard__ctn-info-edit1-name">
                <label
                  htmlFor="phoneNumber"
                  className="dashboard__ctn-info-edit1-name"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  disabled={!profileEdit}
                  value={phoneNumber}
                  onChange={handleChange}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              {dataErrors.phoneNumber && (
                <span className="error-creatorUser">
                  {dataErrors.phoneNumber}
                </span>
              )}

              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  disabled={!profileEdit}
                  className={
                    profileEdit === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Non Binary">Non Binary</option>
                </select>
              </div>

              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="streetAddress">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={streetAddress}
                  id="streetAddress"
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
              {dataErrors.streetAddress && (
                <span className="error-creatorUser">
                  {dataErrors.streetAddress}
                </span>
              )}

              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="city">City/State</label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleChange}
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
              {dataErrors.city && (
                <span className="error-creatorUser">{dataErrors.city}</span>
              )}

              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="zipCode">Zip</label>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
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
              {dataErrors.zipCode && (
                <span className="error-creatorUser">{dataErrors.zipCode}</span>
              )}
            </form>
            <div className="pass__changer">
              <div className="dashboard__ctn-info-edit1-title">
                <h3>Change Password</h3>
                <div className="dashboard__Btng">
                  {editState2 === false && (
                    <button
                      className="dashboard-edit-btn"
                      onClick={() => {
                        setEditState2(true);
                        setProfileEdit2(true);
                      }}
                    >
                      Edit
                    </button>
                  )}

                  {editState2 === true && (
                    <button
                      onClick={() => {
                        setEditState2(false);
                        setProfileEdit2(false);
                        setPassword("");
                        setPassword2("");
                      }}
                    >
                      Cancel
                    </button>
                  )}
                  <form onSubmit={handleNewPassword}>
                    {editState2 === true && (
                      <button
                        type="submit"
                        onClick={(event) => {
                          event.preventDefault();
                          setShouldUpdate("Password");
                          handleNewPassword();
                        }}
                      >
                        Save Changes
                      </button>
                    )}
                  </form>
                </div>
              </div>
              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  disabled={!profileEdit2}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={
                    profileEdit2 === false
                      ? "Dashboard-ctn-isDisabled"
                      : "Dashboard-ctn-isNotDisabled"
                  }
                />
              </div>
              <div className="dashboard__ctn-info-edit1-name">
                <label htmlFor="password2">Confirm your password:</label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  disabled={!profileEdit2}
                  value={password2}
                  onChange={(event) => setPassword2(event.target.value)}
                  className={
                    profileEdit2 === false
                      ? "Dashboard-ctn-isDisabled passwordCtn"
                      : "Dashboard-ctn-isNotDisabled passwordCtn"
                  }
                />
              </div>
            </div>
          </div>
          {passwordErrors.password && (
            <span className="error-creator-pass">
              {passwordErrors.password}
            </span>
          )}

          <div
            className="dashboard__ctn--Bookings"
            style={{ display: selectedTab === "Bookings" ? "flex" : "none" }}
          >
            <h1>My Reservations</h1>
            <div className="reservationDisplay">
              <h2>
                {bookingsArr.length > 0
                  ? `You have ${bookingsArr.length} reservations`
                  : "You haven't made any reservation yet :("}
              </h2>
              {bookingsArr.map((booking, index) => (
                <ReservationCard key={index} booking={booking} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
