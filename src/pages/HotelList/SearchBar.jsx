import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [info, setInfo] = useState({
    city: "",
    datein: new Date().toISOString().split("T")[0],
    dateout: new Date() + 24 * 60 * 60 * 1000,
    guestnumber: "",
  });

  const today = new Date().toISOString().substr(0, 10); // get today's date in YYYY-MM-DD format
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .substr(0, 10); // get tomorrow's date in YYYY-MM-DD format

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  const navigate = useNavigate();
  const minDate = new Date().toISOString().split("T")[0];
  const minDateOut = new Date(
    new Date(info.datein).getTime() + 24 * 60 * 60 * 1000
  )
    .toISOString()
    .split("T")[0];
  console.log(`Min date in ${minDate} and min date out ${minDateOut}`);

  function handleSearchQuery() {
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

  const { city, datein, dateout, guestnumber } = info;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <form className='SearchBar-ctn' action=''>
      <div className='form-box-ctn'>
        <label htmlFor='city'>HOTEL</label>
        <input
          name='city'
          type='text'
          placeholder='Ingrese ciudad de destino'
          onChange={(event) => handleChange(event)}
          value={city}
        />
      </div>

      <div className='form-box-ctn'>
        <label htmlFor='startDate'>CHECK-IN</label>
        <input
          type='date'
          id='startDate'
          name='startDate'
          min={today}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className='form-box-ctn'>
        <label htmlFor='endDate'>CHECK-OUT</label>
        <input
          type='date'
          id='endDate'
          name='endDate'
          min={tomorrow}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className='form-box-ctn'>
        <label htmlFor='guestnumber'>GUESTS</label>
        <input
          name='guestnumber'
          type='number'
          placeholder='Choose'
          min='1'
          max='4'
          onChange={(event) => handleChange(event)}
          value={guestnumber}
        />
      </div>

      <div className='form-box-ctn'>
        <button
          className='search-btn'
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
