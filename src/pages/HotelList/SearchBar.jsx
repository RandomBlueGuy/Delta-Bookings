import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [info, setInfo] = useState({
    city: "",

    guestnumber: "1",
  });
  const [checkInDate, setCheckInDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [checkOutDate, setCheckOutDate] = useState(
    addDays(new Date(), 1).toISOString().split("T")[0]
  );

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function handleCheckInDateChange(event) {
    const newDate = new Date(event.target.value);
    const minimumCheckOutDate = addDays(newDate, 1);
    setCheckInDate(event.target.value);
    setCheckOutDate(minimumCheckOutDate.toISOString().split("T")[0]);
  }

  function handleCheckOutDateChange(event) {
    setCheckOutDate(event.target.value);
  }

  const navigate = useNavigate();
  function handleSearchQuery() {
    const newCity =
      city && city !== "" ? city.split(" ").join("").toLowerCase() : "All";
    const newGuestNumber =
      guestnumber && guestnumber !== "" ? guestnumber : "1";
    setInfo({ ...info, city: newCity });
    const searchParams = {
      ...(newCity && { city: newCity }),
      ...(checkInDate && { checkInDate: `${checkInDate}` }),
      ...(checkOutDate && { checkOutDate: `${checkOutDate}` }),
      ...(newGuestNumber !== null && { guests: newGuestNumber }),
    };

    const queryString = Object.entries(searchParams)
      .map(([key, value]) => {
        return `${key}=${value}`;
      })
      .join("&");
    navigate(`/hotel-list/search?${queryString}`);
  }

  const { city, guestnumber } = info;
  const handleChangeDateIn = (event) => {
    setInfo({
      ...info,
      datein: event.target.value,
      dateout: new Date(
        new Date(event.target.value).getTime() + 24 * 60 * 60 * 1000
      )
        .toISOString()
        .split("T")[0],
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <form className="SearchBar-ctn" action="">
      <div className="form-box-ctn">
        <label htmlFor="city">HOTEL</label>
        <input
          name="city"
          type="text"
          placeholder="Ingrese ciudad de destino"
          onChange={(event) => handleChange(event)}
          value={city}
        />
      </div>
      <div className="form-box-ctn">
        <label htmlFor="checkInDate">CHECK-IN</label>
        <input
          type="date"
          id="checkInDate"
          name="checkInDate"
          value={checkInDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={handleCheckInDateChange}
        />
      </div>
      <div className="form-box-ctn">
        <label htmlFor="checkOutDate">CHECK-OUT</label>
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
      </div>
      <div className="form-box-ctn">
        <label htmlFor="guestnumber">GUESTS</label>
        <input
          name="guestnumber"
          type="number"
          placeholder="Choose"
          min="1"
          max="4"
          onChange={(event) => handleChange(event)}
          value={guestnumber}
        />
      </div>
      <div className="form-box-ctn">
        <button
          className="search-btn"
          onClick={() => {
            return handleSearchQuery();
          }}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}
export default SearchBar;
