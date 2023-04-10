import React, { useState, useEffect, useRef } from "react";
import ManageListMember from "./ManageListMember";
import HotelListPagination from "../HotelList/HotelListPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";

function HotelManagement() {
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 10;
  const [maxNpages, setMaxNpages] = useState();
  const HotelsArray = useSelector((state) => state.fetchData.HotelsArray);
  const [filteredHotelsArray, setFilteredHotelsArray] = useState(() => {
    return HotelsArray;
  });
  const [inputFilter, setInputFilter] = useState("");
  const [inputKey, setInputKey] = useState("HotelName");
  const dispatch = useDispatch();
  const refProp = useRef(null);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (HotelsArray.length > 0) {
      setFilteredHotelsArray(HotelsArray);
    }
  }, [HotelsArray]);

  useEffect(() => {
    setFilteredHotelsArray(
      HotelsArray.filter((hotel) => {
        const input = inputFilter.split(" ").join("").toLowerCase();
        const key = hotel[`${inputKey}`].toString().split(" ").join("").toLowerCase();
        return key.includes(input);
      })
    );
  }, [inputFilter, inputKey]);

  useEffect(() => {
    const res = filteredHotelsArray.length / itemsPerPage;
    setMaxNpages(res > parseInt(res) ? parseInt(res) + 1 : res);
  }, [filteredHotelsArray]);

  return (
    <main className="HotelManagement__ctn" ref={refProp}>
      <h1>Hotel Management</h1>
      {/* <ol>
        <li>Create List card component</li>
        <li>Axios magic</li>
        <li>Map results on each List card</li>
        <li>Add pagination</li>
        <li>Add option to DELETE</li>
        <li>EDIT: Redirect to Create a New Hotel</li>
        <li>Fill Create a New Hotel form inputs with previous information</li>
      </ol> */}

      <label htmlFor="management__searchbar" />
      <div className="searchbar__ctn">
        <input
          value={inputFilter}
          type="text"
          onChange={(event) => setInputFilter(event.target.value)}
          className="management__searchbar"
        />
        <select
          value={inputKey}
          onChange={(event) => {
            return setInputKey(event.target.value);
          }}
        >
          <option disabled selected>-- Filter by --</option>
          <option value="HotelName">Name</option>
          <option value="HotelId">Id</option>
          <option value="loc_City">City</option>
          <option value="loc_Country">Country</option>
        </select>
        <button>SEARCH</button>
      </div>

      {/* <section className="filter__ctn">
          <label htmlFor="">
            Id:
            <input type="text" placeholder="#" />
          </label>
          <label htmlFor="">
            Name:
            <input type="text" placeholder="Name" />
          </label>
          <label htmlFor="">
            City:
            <input type="text" placeholder="city" />
          </label>
          <label htmlFor="">
            Country:
            <input type="text" placeholder="Country" />
          </label>
          <label htmlFor="">
            Value:
            <select name="" id="">
              <option value="">Popularity #</option>
              <option value="">Trending #</option>
            </select>
          </label>
      </section> */}

      <section className="management__listDisplay">
        {filteredHotelsArray
          .slice(
            actualPage * itemsPerPage,
            actualPage * itemsPerPage + itemsPerPage
          )
          .map((hotel, index) => {
            return <ManageListMember key={index} hotel={hotel} />;
          })}
      </section>

      <div className="manage__pagination">
        <HotelListPagination
          maxNpages={maxNpages}
          actualPage={actualPage}
          setActualPage={setActualPage}
          refProp={refProp}
        />
      </div>
    </main>
  );
}

export default HotelManagement;
