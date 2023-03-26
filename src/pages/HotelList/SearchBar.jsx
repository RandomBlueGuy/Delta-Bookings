import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [info, setInfo] = useState({
    city: "",
    datein: "",
    dateout: "",
    guestnumber: "",
  });

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
      validationErrors.firstName = "Please enter a city";
    } else if (!/^[a-zA-Z]+$/.test(city)) {
      validationErrors.cityName = "city name must only contain numbers";
    }

    // Validation if Date In is bigger than End Date
    if (start.getDate() > end.getDate()) {
      validationErrors.dateRange = "Invalid date range";
      //|| end < start
    } else if (start < today) {
      validationErrors.dateRange = "The inital or end date is expired";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Envio de info
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
        <button className='search-btn'>SEARCH</button>
      </div>
    </form>
  );
}

export default SearchBar;
