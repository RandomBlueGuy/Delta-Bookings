import "./CheckCard.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import WarningMessage from "../UniversalComponents/WarningMessage";
import { useCookies } from "react-cookie";

function CheckCard({ currentHotel, searchParams, selectedRoom }) {
  const [guests, setGuests] = useState(searchParams.guestnumber);
  const [cookies] = useCookies(["cookieToken"]);
  const [disabler, setDisabler] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [warningResult, setWarningResult] = useState();
  const [warningMessage, setWarningMessage] = useState("");
  const [warningTitle, setWarningTitle] = useState("");
  const navigate = useNavigate();
  const position = [currentHotel.loc_Lat, currentHotel.loc_Lng];
  const [checkInDate, setCheckInDate] = useState(
    searchParams.checkInDate || new Date().toISOString().split("T")[0]
  );
  const [checkOutDate, setCheckOutDate] = useState(
    searchParams.checkOutDate ||
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0]
  );
  const handleCheckInChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    setCheckInDate(event.target.value);
    setCheckOutDate(nextDay.toISOString().split("T")[0]);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  useEffect(() => {
    if (
      guests &&
      checkInDate &&
      checkOutDate &&
      Object.keys(selectedRoom).length > 0
    ) {
      setDisabler(false);
    }
  }, [selectedRoom, guests, checkInDate, checkOutDate]);

  useEffect(() => {
    if (warningResult && cookies.cookieToken) {
      const bookingParams = {
        id: searchParams.id,
        roomId: selectedRoom.id,
        city: searchParams.city,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guestsN: guests,
      };
      const queryString = new URLSearchParams(bookingParams).toString();
      navigate(`/bookings/bkngcd?${queryString}`);
    } else if (warningResult) {
      navigate(`/login`);
    }
  }, [warningResult]);

  const handleGuestChange = (event) => {
    setGuests(parseInt(event.target.value));
  };

  const myIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/13b147079dbd6ee38d3c4805087007b349a2671a/src/assets/Icons/location.svg",
    iconSize: [30, 30],
  });

  const handleBooking = (event) => {
    event.preventDefault();
    if (cookies.cookieToken) {
      setWarningTitle("Proceed to booking");
      setWarningMessage("Do you want to proceed with the current booking?");
      setShowWarning(true);
    } else {
      setWarningTitle("You should register...");
      setWarningMessage(
        "You need to be logged in order to book a hotel. By pressing yes you will be redirected to our login page."
      );
      setShowWarning(true);
    }
  };

  return (
    <section className="check__card">
      {showWarning && (
        <WarningMessage
          warningMessage={warningMessage}
          warningTitle={warningTitle}
          setShowWarning={setShowWarning}
          setWarningResult={setWarningResult}
        />
      )}
      <div className="check__card-map">
        <MapContainer
          center={position}
          zoom={6}
          scrollWheelZoom={false}
          style={{ zIndex: 1 }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={myIcon}>
            <Popup>Your Hotel is Here</Popup>
          </Marker>
        </MapContainer>
      </div>
      <section className="check__card-info">
        <div className="check__card--line">
          <h4 className="rate-title">[RATE TYPE]</h4>
          <p style={{ fontWeight: "700", fontSize: "80%", color: "gray" }}>
            Per Nigth
          </p>
        </div>
        <div className="check__card--line">
          <p className="rate-description">✔ Non Refundable</p>
          <h2 style={{ fontSize: "80%", textDecoration: "line-through" }}>
            $
            {selectedRoom.OriginalPricePerNight
              ? selectedRoom.OriginalPricePerNight
              : "0"}
          </h2>
        </div>
        <div className="check__card--line">
          <p className="rate-description">✔ Room only</p>
          <h2>
            $
            {selectedRoom.OriginalPricePerNight
              ? parseInt(
                  selectedRoom.OriginalPricePerNight -
                    (parseInt(selectedRoom.OriginalPricePerNight) *
                      parseInt(selectedRoom.Discount)) /
                      100
                )
              : "0"}
          </h2>
        </div>
      </section>

      <form className="check__card-form" action="">
        <label htmlFor="check-in">Check-in Date</label>
        <input
          type="date"
          id="checkInDate"
          name="checkInDate"
          value={checkInDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={handleCheckInChange}
        />
        <label htmlFor="check-out">Check-out Date</label>
        <input
          type="date"
          id="checkOutDate"
          name="checkOutDate"
          value={checkOutDate}
          min={
            checkInDate &&
            new Date(new Date(checkInDate).getTime() + 86400000)
              .toISOString()
              .split("T")[0]
          }
          onChange={handleCheckOutDateChange}
        />
        <div className="Guest__select">
          <strong>City:</strong>
          <p>{currentHotel.loc_City}</p>
        </div>
        <div className="Guest__select">
          <strong>Room:</strong>
          <p>{selectedRoom.RoomName || "Please select a room first"}</p>
        </div>
        <div className="Guest__select">
          <strong>Guests:</strong>
          <select
            className="guest__select"
            name=""
            id=""
            value={guests}
            onChange={(event) => {
              handleGuestChange(event);
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <button
          className="BOOKING_BTN"
          disabled={disabler}
          onClick={(event) => handleBooking(event)}
        >
          Book This Now
        </button>
      </form>
    </section>
  );
}

export default CheckCard;
