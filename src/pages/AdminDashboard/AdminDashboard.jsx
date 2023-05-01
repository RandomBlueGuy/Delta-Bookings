import React from "react";
import "./AdminDashboard.css";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AdminImg from "../../assets/Images/dev-pic1.png";
import HotelManagement from "./HotelManagement";
import HotelCreator from "./HotelCreator";
import ReservationVisualizer from "./ReservationVisualizer";
import UserAdministration from "./UserAdministration";

export default function AdminDashboard() {
  const [profileEdit, setProfileEdit] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Create");

  function handleClick(selection) {
    setSelectedTab(selection);
  }

  function handleClickEdit() {
    setProfileEdit(!profileEdit);
  }

  return (
    <main className="AdminDashboard__ctn">
      <section className="AdminDashboard__ctn-info">
        <div className="AdminDashboard__ctn-info-prof">
          <div className="AdminDashboard__ctn-info-img">
            <img src={AdminImg} alt="" />
            <button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          <div className="AdminDashboard__ctn-info-text">
            <h1>[ADMIN NAME]</h1>
            <p>[ADMIN PHONE NUMBER]</p>
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
        </div>
      </section>
      <section className="Admin__AdminDashboardCtn">
        <div
          className="hotelManagement__ctn"
          style={{ display: selectedTab === "Management" ? "block" : "none" }}
        >
          <HotelManagement />
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
      </section>
    </main>
  );
}
