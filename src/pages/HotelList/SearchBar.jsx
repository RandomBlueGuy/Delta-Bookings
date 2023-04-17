import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [info, setInfo] = useState({
    city: "",
    datein: "",
    dateout: "",
    guestnumber: "",
  });
  const navigate = useNavigate();

  function handleSearchQuery() {
    const searchParams = {
      ...(city && city.trim() !== "" && { city: `${city.split(" ").join("_").toLocaleLowerCase()}` }),
      ...(datein && datein.trim() !== "" && { checkInDate: `${datein}` }),
      ...(dateout && dateout.trim() !== "" && { checkOutDate: `${dateout}` }),
      ...(guestnumber !== null && guestnumber !== "" && { guests: guestnumber }),
    };
    const queryString = Object.entries(searchParams)
      .map(([key, value]) => {
        return `${key}=${value}`;
      })
      .join("&");
    navigate(`/hotel-list/search?${queryString}`);
  }
 
  const [errors, setErrors] = useState({});
  const { city, datein, dateout, guestnumber } = info;
  const start = new Date(datein);
  const end = new Date(guestnumber);
  const today = new Date();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (city.trim() === "") {
      validationErrors.cityName = "Please enter a city";
    } else if (!/^[a-zA-Z]+$/.test(city.trim().replace(/\s+/g, ""))) {
      validationErrors.cityName = "city name must only contain letters";
    }

    if (start.getDate() > end.getDate()) {
      validationErrors.dateRange = "Invalid date range";
    } else if (!datein || !dateout) {
      validationErrors.dateRange = "Please enter both dates";
    } else if (start < today || today > end) {
      validationErrors.dateRange = "The inital date or end date is expired";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          city,
          datein,
          dateout,
          guestnumber,
        })
        .catch((error) => console.error(error));
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleInfo} className='SearchBar-ctn' action=''>
      <div className='form-box-ctn'>
        <label htmlFor='city'>HOTEL</label>
        <input
          name='city'
          type='text'
          placeholder='Ingrese ciudad de destino'
          onChange={(event) => handleChange(event)}
          value={city}
        />
        {errors.cityName && <span className='error'>{errors.cityName}</span>}
      </div>

      <div className='form-box-ctn'>
        <label htmlFor='datein'>CHECK-IN</label>
        <input
          name='datein'
          type='date'
          placeholder='Fecha del Check-in'
          onChange={(event) => handleChange(event)}
          value={datein}
        />
        {errors.dateRange && <span className='error'>{errors.dateRange}</span>}
      </div>

      <div className='form-box-ctn'>
        <label htmlFor='dateout'>CHECK-OUT</label>
        <input
          name='dateout'
          type='date'
          placeholder='Fecha de Check-out'
          onChange={(event) => handleChange(event)}
          value={dateout}
        />
        {errors.dateRange && <span className='error'>{errors.dateRange}</span>}
      </div>

      <div className='form-box-ctn'>
        <label htmlFor='guestnumber'>GUESTS</label>
        <input
          name='guestnumber'
          type='number'
          placeholder='Choose'
          min='1'
          max='5'
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
