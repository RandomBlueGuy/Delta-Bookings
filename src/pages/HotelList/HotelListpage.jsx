import React, { useState, useEffect, useRef } from "react";

import "./HotelListpage.css";
import Header from "./HotelListHeader";
import HotelCard from "./HotelCard";
import SearchBar from "./SearchBar";
import HotelListPagination from "./HotelListPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";

function HotelListpage() {
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 6;
  const [maxNpages, setMaxNpages] = useState(0);
  const HotelsArray = useSelector((state) => state.fetchData.HotelsArray);
  const dispatch = useDispatch();
  const refProp = useRef(null);
  const [filteredHotelsArray, setFilteredHotelsArray] = useState(HotelsArray);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  function filterResults(value = "All") {
    switch (value) {
      case "All":
        setFilteredHotelsArray(HotelsArray.slice(0, 3));
        break;
      case "Popular":
        setFilteredHotelsArray(
          HotelsArray.filter((hotel) => hotel.PopularityNumber >= 70).slice(
            0,
            3
          )
        );
        break;
      default:
        break;
    }
    const res = filteredHotelsArray.length / itemsPerPage;
    setMaxNpages(res > parseInt(res) ? parseInt(res) + 1 : res);
  }

  // useEffect(() => {

  // }, [selectedFilter]);

  return (
    <div className="HotelListpage-ctn">
      <Header />
      <div className="SearchBar-ctn-display">
        <SearchBar />
      </div>
      <div className="HotelList-displayer" ref={refProp}>
        <div className="filter-ctn">
          <div className="filter-ctn-btns">
            <h2>Filter by: {selectedFilter}</h2>
            {/* <select name="" id="">
              <option value="">All</option>
              <option value="">Popular</option>
              <option value="">Latest</option>
              <option value="">Trend</option>
            </select> */}
            <button
              value={"All"}
              className={
                selectedFilter === "All"
                  ? "filter-ctn-selected"
                  : "filter-ctn-Notselected"
              }
              onClick={(event) => {
                setSelectedFilter(event.target.value);
                filterResults(event.target.value);
              }}
            >
              All
            </button>
            <button
              value={"Popular"}
              className={
                selectedFilter === "Popular"
                  ? "filter-ctn-selected"
                  : "filter-ctn-Notselected"
              }
              onClick={(event) => {
                setSelectedFilter(event.target.value);
                filterResults(event.target.value);
              }}
            >
              Popular
            </button>
            <button
              className={
                selectedFilter === "Latest"
                  ? "filter-ctn-selected"
                  : "filter-ctn-Notselected"
              }
              onClick={() => {
                setSelectedFilter("Latest");
              }}
            >
              Latest
            </button>
            <button
              className={
                selectedFilter === "Trend"
                  ? "filter-ctn-selected"
                  : "filter-ctn-Notselected"
              }
              onClick={() => {
                setSelectedFilter("Trend");
              }}
            >
              Trend
            </button>
          </div>
          <div className="weird-thing">
            <p>☰ latest Filter</p>
          </div>
        </div>
        <div className="card-gallery">
          {filteredHotelsArray
            .slice(
              actualPage * itemsPerPage,
              actualPage * itemsPerPage + itemsPerPage
            )
            .map((item, index) => {
              return <HotelCard key={index} hotelInfoCard={item} />;
            })}
        </div>
        <HotelListPagination
          maxNpages={maxNpages}
          actualPage={actualPage}
          setActualPage={setActualPage}
          refProp={refProp}
        />
      </div>
    </div>
  );
}

export default HotelListpage;
