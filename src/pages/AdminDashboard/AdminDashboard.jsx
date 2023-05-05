import "./AdminDashboard.css";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import HotelManagement from "./HotelManagement";
import HotelCreator from "./HotelCreator";
import ReservationVisualizer from "./ReservationVisualizer";
import UserAdministration from "./UserAdministration";
import HotelUpdater from "./HotelUpdater";
import UserImgPlaceholder from "../../assets/Images/user.svg";

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("Management");
  const [hasChosenHotel, setHasChosenHotel] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [picture, setPicture] = useState("");
  const [image, setImage] = useState("");
  const [userData, setUserData] = useState("");
  const [changeImage, setChangeImage] = useState(false);
  const [cookies] = useCookies("cookieToken");
  const decode = useJwt(cookies.cookieToken);

  const DB_URL = process.env.REACT_APP_BACKEND_URL;

  function chooseHotelEdit(hotel) {
    setSelectedHotel(hotel);
    setHasChosenHotel(true);
  }

  useEffect(() => {
    if (hasChosenHotel === true) {
      setHasChosenHotel(false);
      setSelectedTab("hotelUpdate");
    }
  }, [hasChosenHotel]);

  function handleClick(selection) {
    setSelectedTab(selection);
  }

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

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
        data.append("Admin", userData);
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
          setUserData(response.data.data.fullName);
          setPicture(response.data.data.picture);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [decode.decodedToken]);

  return (
    <main className="AdminDashboard__ctn">
      <section className="AdminDashboard__ctn-info">
        <div className="AdminDashboard__ctn-info-prof">
          <div className="dashboard__ctn-info-img">
          <img src={picture ? picture : UserImgPlaceholder} className='profile__img' alt='' />
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
            <h1>{userData || "Admin"}</h1>
            <p>Administrator</p>
          </div>
        </div>

        <div className="AdminDashboard__ctn-info-select">
          <button
            type="button"
            value="Management"
            className={
              selectedTab === "Management" ? "AdminDashboard-is-active" : ""
            }
            onClick={(event) => handleClick(event.target.value)}
          >
            Hotel Management
          </button>
          <button
            type="button"
            value="Create"
            className={
              selectedTab === "Create" ? "AdminDashboard-is-active" : ""
            }
            onClick={(event) => handleClick(event.target.value)}
          >
            Create a New Hotel
          </button>
          <button
            type="button"
            value="Reservations"
            className={
              selectedTab === "Reservations" ? "AdminDashboard-is-active" : ""
            }
            onClick={(event) => handleClick(event.target.value)}
          >
            Reservations
          </button>
          <button
            type="button"
            value="UserAdministration"
            className={
              selectedTab === "UserAdministration"
                ? "AdminDashboard-is-active"
                : ""
            }
            onClick={(event) => handleClick(event.target.value)}
          >
            User Management
          </button>
          <button
            type="button"
            value="hotelUpdate"
            className={
              selectedTab === "hotelUpdate" ? "AdminDashboard-is-active" : ""
            }
            onClick={(event) => handleClick(event.target.value)}
          >
            Edit Hotel{" "}
          </button>
        </div>
      </section>
      <section className="Admin__AdminDashboardCtn">
        <div
          className="hotelManagement__ctn"
          style={{ display: selectedTab === "Management" ? "block" : "none" }}
        >
          <HotelManagement chooseHotelEdit={chooseHotelEdit} />
        </div>

        <div
          className="hotelCreate__ctn"
          style={{ display: selectedTab === "Create" ? "block" : "none" }}
        >
          <HotelCreator />
        </div>
        <div
          className="hotelReservations__ctn"
          style={{ display: selectedTab === "Reservations" ? "block" : "none" }}
        >
          <ReservationVisualizer />
        </div>
        <div
          className="UserAdministration"
          style={{
            display: selectedTab === "UserAdministration" ? "block" : "none",
          }}
        >
          <UserAdministration />
        </div>
        <div
          className="UserAdministration"
          style={{
            display: selectedTab === "hotelUpdate" ? "block" : "none",
          }}
        >
          {selectedHotel && <HotelUpdater hotel={selectedHotel} />}
        </div>
      </section>
    </main>
  );
}
