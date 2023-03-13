import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HotelListpage.css";
import Header from "./HotelListHeader";
import HotelCard from "./HotelCard";
import SearchBar from "./SearchBar";
import HotelListPagination from "./HotelListPagination";

function HotelListpage() {
  const [actualPage, setActualPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [hotelCardArr, setHotelCardArr] = useState([]);
  const maxNpages = getMaxNpages();

  function getMaxNpages() {
    const res = hotelCardArr.length / itemsPerPage;
    return res > parseInt(res) ? parseInt(res) + 1 : res;
  }

  useEffect(() => {
    axios
      .get("/DB/HotelDataBase.json")
      .then((response) => {
        setHotelCardArr([...hotelCardArr, ...response.data]);
      })
      .catch((err) => console.log(err));
    setItemsPerPage(6);
  }, []);

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
          {hotelCardArr
            .slice(
              actualPage * itemsPerPage,
              actualPage * itemsPerPage + itemsPerPage
            )
            .map((item) => {
              //console.log("item en map", item);
              return <HotelCard hotelInfoCard={item} />;
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
