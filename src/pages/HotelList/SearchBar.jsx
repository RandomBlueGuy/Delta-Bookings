import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
      <form className="SearchBar" action="">
        <div className="form-box">
          <label htmlFor="">HOTEL</label>
          <input type="text" placeholder="Ingrese ciudad de destino" />
        </div>

        <div className="form-box">
          <label htmlFor="">CHECK-IN</label>
          <input type="date" placeholder="Fecha del Check-in" />
        </div>

        <div className="form-box">
          <label htmlFor="">CHECK-OUT</label>
          <input type="date" placeholder="Fecha de Check-out" />
        </div>

        <div className="form-box">
          <label htmlFor="">GUESTS</label>
          <input type="number" placeholder="Choose" />
        </div>

        <div className="form-box">
          <button className="search-btn">SEARCH</button>
        </div>
      </form>
  );
}

export default SearchBar;
