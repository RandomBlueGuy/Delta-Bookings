import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [info, setInfo] = useState({
    city: "",
    datein: "",
    dateout: "",
    guestnumber: "",
  });
  const navigate = useNavigate();
  // setInfo({ ...info, city:`${city.split(" ").join("_").toLowerCase()}`});
  
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
