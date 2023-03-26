import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HotelListpage.css";
import Header from "./HotelListHeader";
import HotelCard from "./HotelCard";
import SearchBar from "./SearchBar";
import HotelListPagination from "./HotelListPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";

function HotelListpage() {
  const [actualPage, setActualPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [maxNpages, setMaxNpages] = useState();
  const HotelsArray = useSelector((state) => state.fetchData.HotelsArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    const res = HotelsArray.length / itemsPerPage;
    setMaxNpages(res > parseInt(res) ? parseInt(res) + 1 : res);
  }, [HotelsArray]);

  return (
    <div className="HotelListpage-ctn">
      <Header />
      <div className="SearchBar-ctn-display">
        <SearchBar />
      </div>
      <div className="HotelList-displayer">
        <div className="filter-ctn">
          <div className="filter-ctn-btns">
            <button>All</button>
            <button>Popular</button>
            <button>Latest</button>
            <button>Trend</button>
          </div>
          <div className="weird-thing">
            <p>☰ latest Filter</p>
          </div>
        </div>
        <div className="card-gallery">
          {HotelsArray.slice(
            actualPage * itemsPerPage,
            actualPage * itemsPerPage + itemsPerPage
          ).map((item, index) => {
            //console.log("item en map", item);
            return <HotelCard key = {index} hotelInfoCard={item} />;
          })}
        </div>
        <HotelListPagination
          maxNpages={maxNpages}
          actualPage={actualPage}
          setActualPage={setActualPage}
        />
      </div>
    </div>
  );
}

export default HotelListpage;
