import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
      <form className="SearchBar-ctn" action="">
        <div className="form-box-ctn">
          <label htmlFor="">HOTEL</label>
          <input type="text" placeholder="Ingrese ciudad de destino" />
        </div>

        <div className="form-box-ctn">
          <label htmlFor="">CHECK-IN</label>
          <input type="date" placeholder="Fecha del Check-in" />
        </div>

        <div className="form-box-ctn">
          <label htmlFor="">CHECK-OUT</label>
          <input type="date" placeholder="Fecha de Check-out" />
        </div>

        <div className="form-box-ctn">
          <label htmlFor="">GUESTS</label>
          <input type="number" placeholder="Choose" />
        </div>

        <div className="form-box-ctn">
          <button className="search-btn">SEARCH</button>
        </div>
      </form>
  );
}

export default SearchBar;
