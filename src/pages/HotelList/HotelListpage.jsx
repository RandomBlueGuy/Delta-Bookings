import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import "./HotelListpage.css";
import Header from "./HotelListHeader";
import HotelCard from "./HotelCard";
import SearchBar from "./SearchBar";
import HotelListPagination from "./HotelListPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";
import LoadingComp from "../UniversalComponents/LoadingComp";

function HotelListpage() {
  
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 9;
  const [maxNpages, setMaxNpages] = useState(0);
  const HotelsArray = useSelector((state) => state.fetchData.HotelsArray);
  const dispatch = useDispatch();
  const refProp = useRef(null);
  let [filteredHotelsArray, setFilteredHotelsArray] = useState(HotelsArray);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const loading = useSelector((state) => state.fetchData.loading);
  const [filterLoading, setFilterLoading] = useState(false);
  const { q } = useParams();

  console.log("searchQuery =>", q); // "hbwafea"

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  //INITIALIZE FILTERED HOTELS
  useEffect(() => {
    if (HotelsArray.length > 0) {
      setFilteredHotelsArray(HotelsArray);
    }
  }, [HotelsArray]);

  //SET A FILTER FOR FILTERED HOTELS ARRAY AND SORT ITS MEMBERS
  useEffect(() => {
    switch (selectedFilter) {
      case "All":
        setFilteredHotelsArray(HotelsArray);
        break;
      case "Popular":
        setFilteredHotelsArray(() =>
          HotelsArray.filter((hotel) => hotel.PopularityNumber >= 70).sort(
            (hotel1, hotel2) =>
              hotel2.PopularityNumber - hotel1.PopularityNumber
          )
        );
        break;
      case "Trending":
        setFilteredHotelsArray(() =>
          HotelsArray.filter((hotel) => hotel.TrendingNumber <= 25).sort(
            (hotel1, hotel2) => hotel1.TrendingNumber - hotel2.TrendingNumber
          )
        );
        break;
      case "Latest":
        setFilteredHotelsArray(() =>
          HotelsArray.filter(
            (hotel) =>
              new Date(hotel.DateAdded).getTime() / 1000 >=
              Date.now() / 1000 - 3600 * 24 * 365
          )
        );
        break;
      default:
        break;
    }
    setActualPage(0);
  }, [maxNpages, selectedFilter]);

  //UPDATE PAGINATION
  useEffect(() => {
    const res = filteredHotelsArray.length / itemsPerPage;
    setMaxNpages(() => (res > parseInt(res) ? parseInt(res) + 1 : res));
  }, [filteredHotelsArray]);

  //FAKE LOADING SCREEN
  const setFakeLoading = () => {
    setFilterLoading(true);
    setInterval(() => {
      setFilterLoading(false);
    }, 500);
  };

  return (
    <div className="HotelListpage-ctn">
      {loading === true && <LoadingComp />}
      {filterLoading === true && <LoadingComp />}
      <Header />
      <div className="SearchBar-ctn-display">
        <SearchBar />
      </div>
      <div className="HotelList-displayer" ref={refProp}>
        <div className="filter-ctn">
          <div className="filter-ctn-btns">
            <h2>
              Filter by:{filteredHotelsArray.length} -- {maxNpages}
            </h2>
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
                setFakeLoading()
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
                setFakeLoading()
              }}
            >
              Popular
            </button>
            <button
              value={"Latest"}
              className={
                selectedFilter === "Latest"
                  ? "filter-ctn-selected"
                  : "filter-ctn-Notselected"
              }
              onClick={(event) => {
                setSelectedFilter(event.target.value);
                setFakeLoading()
              }}
            >
              Latest
            </button>
            <button
              value={"Trending"}
              className={
                selectedFilter === "Trending"
                  ? "filter-ctn-selected"
                  : "filter-ctn-Notselected"
              }
              onClick={(event) => {
                setSelectedFilter(event.target.value);
                setFakeLoading()
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
