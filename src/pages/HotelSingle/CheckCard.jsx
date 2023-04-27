import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckCard.css";
import GoogleMap from "google-map-react";
import WarningMessage from "../UniversalComponents/WarningMessage";

function CheckCard({ currentHotel, searchParams, selectedRoom }) {
  const { id } = searchParams;
  const [guests, setGuests] = useState(searchParams.guestnumber);
  const [dateIn, setDatein] = useState(searchParams.datein);
  const [dateOut, setDateOut] = useState(searchParams.dateout);
  const [disabler, setDisabler] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [warningResult, setWarningResult] = useState();
  const navigate = useNavigate();
  const minDate = new Date().toISOString().split("T")[0];
  // console.log("searchParams", searchParams);
  // console.log("SelectedROOM", selectedRoom);

  useEffect(() => {
    if (guests && dateIn && dateOut && Object.keys(selectedRoom).length > 0) {
      setDisabler(false);
    }
  }, [selectedRoom, guests, dateIn, dateOut]);

  const handleGuestChange = (event) => {
    setGuests(parseInt(event.target.value));
  };

  const handleDateInChange = (event) => {
    setDatein(event.target.value);
  };

  const handleDateOutChange = (event) => {
    setDateOut(event.target.value);
  };

  const handleBooking = (event) => {
    event.preventDefault();
    setShowWarning(true);
    const QueryString = {};
    
    if (warningResult) {
      navigate(`/bookings/bkngcd?${QueryString}`);
    }
  };

  // function handleNavigate() {
  //   const { city, datein, dateout, guestnumber } = searchParams;
  //   const newSearchParams = {
  //     id: hotelInfoCard.id,
  //     city,
  //     datein,
  //     dateout,
  //     guestnumber,
  //   };

  //   const queryString = new URLSearchParams(newSearchParams).toString();
  //   navigate(`/hotel-single/htlnfo?${queryString}`);
  // }

  /**
   *   function handleSearchQuery() {
    const newCity = city.split(" ").join("").toLowerCase();
    setInfo({ ...info, city: newCity });
    const searchParams = {
      ...(newCity && { city }),
      ...(datein && datein.trim() !== "" && { checkInDate: `${datein}` }),
      ...(dateout && dateout.trim() !== "" && { checkOutDate: `${dateout}` }),
      ...(guestnumber !== null &&
        guestnumber !== "" && { guests: guestnumber }),
    };

    const queryString = Object.entries(searchParams)
      .map(([key, value]) => {
        return `${key}=${value}`;
      })
      .join("&");

    navigate(`/hotel-list/search?${queryString}`);
  }
   */

  

  return (
    <section className='check__card'>
      {showWarning && (
        <WarningMessage
          warningMessage={"Do you want to proceed with the current booking?"}
          warningTitle={"Proceed to booking"}
          setShowWarning={setShowWarning}
          setWarningResult={setWarningResult}
        />
      )}
      <div className='check__card-map'>
        <GoogleMap
          center={{
            lat: Number(currentHotel.loc_Lat),
            lng: Number(currentHotel.loc_Lng),
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
        <div className='check__card--line'>
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
          placeholder="Check-In Date"
          value={dateIn}
          onChange={handleDateInChange}
        />
        <label htmlFor="check-out">Check-out Date</label>
        <input
          type="date"
          placeholder="Check-Out Date"
          value={dateOut}
          onChange={handleDateOutChange}
        />
        <div className="Guest__select">
          <strong>City:</strong>
          <p>{currentHotel.loc_City}</p>
        </div>
        <div className="Guest__select">
          <strong>Rooms:</strong>
          <p>{selectedRoom.RoomName}</p>
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
