import React, { useState, useEffect, useRef } from "react";
import ManageListMember from "./ManageListMember";
import HotelListPagination from "../HotelList/HotelListPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";

function HotelManagement({ chooseHotelEdit }) {
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
        const key = hotel[`${inputKey}`]
          .toString()
          .split(" ")
          .join("")
          .toLowerCase();
        return key.includes(input);
      })
    );
  }, [inputFilter, inputKey]);

  useEffect(() => {
    const res = filteredHotelsArray.length / itemsPerPage;
    setMaxNpages(res > parseInt(res) ? parseInt(res) + 1 : res);
  }, [filteredHotelsArray]);

  return (
    <main className='HotelManagement__ctn' ref={refProp}>
      <h1>Hotel Management</h1>
      <label htmlFor='management__searchbar' />
      <div className='searchbar__ctn'>
        <input
          value={inputFilter}
          type='text'
          onChange={(event) => setInputFilter(event.target.value)}
          className='management__searchbar'
        />
        <select
          value={inputKey}
          onChange={(event) => {
            return setInputKey(event.target.value);
          }}
        >
          <option disabled selected>
            -- Filter by --
          </option>
          <option value='HotelName'>Name</option>
          <option value='HotelId'>Id</option>
          <option value='loc_City'>City</option>
          <option value='loc_Country'>Country</option>
        </select>
        <button>SEARCH</button>
      </div>

      <section className='management__listDisplay'>
        {filteredHotelsArray
          .slice(
            actualPage * itemsPerPage,
            actualPage * itemsPerPage + itemsPerPage
          )
          .map((hotel, index) => {
            return (
              <ManageListMember
                key={hotel.id}
                hotel={hotel}
                index={index + 1}
                chooseHotelEdit={chooseHotelEdit}
              />
            );
          })}
      </section>

      <div className='manage__pagination'>
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
