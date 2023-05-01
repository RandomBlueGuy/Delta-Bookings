import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckCard.css";
import GoogleMap from "google-map-react";
import WarningMessage from "../UniversalComponents/WarningMessage";

function CheckCard({ currentHotel, searchParams, selectedRoom }) {
  const [guests, setGuests] = useState(searchParams.guestnumber);

  const [disabler, setDisabler] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [warningResult, setWarningResult] = useState();
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(searchParams.checkInDate || new Date().toISOString().split("T")[0]);
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
    if (guests && checkInDate && checkOutDate && Object.keys(selectedRoom).length > 0) {
      setDisabler(false);
    }
  }, [selectedRoom, guests, checkInDate, checkOutDate]);

  useEffect(() => {
    if (warningResult) {
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
    }
  }, [warningResult]);

  const handleGuestChange = (event) => {
    setGuests(parseInt(event.target.value));
  };

  const handleDateInChange = (event) => {
    setCheckInDate(event.target.value);
    setCheckInDate(() => {
      return new Date(
        new Date(event.target.value).getTime() + 24 * 60 * 60 * 1000
      )
        .toISOString()
        .split("T")[0];
    });
  };

  const handleCheckOutChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const handleBooking = (event) => {
    event.preventDefault();
    setShowWarning(true);
  };

  return (
    <section className="check__card">
      {showWarning && (
        <WarningMessage
          warningMessage={"Do you want to proceed with the current booking?"}
          warningTitle={"Proceed to booking"}
          setShowWarning={setShowWarning}
          setWarningResult={setWarningResult}
        />
      )}
      <div className="check__card-map">
        <GoogleMap
          center={{
            lat: 51.51271608651099, 
            lng: 7.462423170202694
          }}
          zoom={20}
        ></GoogleMap>
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
