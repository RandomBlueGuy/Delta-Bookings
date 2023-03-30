import React, { useState, useEffect } from "react";
import ManageListMember from "./ManageListMember";
import HotelListPagination from "../HotelList/HotelListPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";

function HotelManagement() {
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 10;
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
    <main>
      <h1>Hotel Management</h1>
      <ol>
        <li>Create List card component</li>
        <li>Axios magic</li>
        <li>Map results on each List card</li>
        <li>Add pagination</li>
        <li>Add option to DELETE</li>
        <li>EDIT: Redirect to Create a New Hotel</li>
        <li>Fill Create a New Hotel form inputs with previous information</li>
      </ol>

      <label htmlFor="management__searchbar" />
      <div className="searchbar__ctn">
        <input type="text" className="management__searchbar" />
        <select name="" id="">
          <option value="">-- sort by --</option>
          <option value="Id">Id</option>
          <option value="City">City</option>
          <option value="Country">Country</option>
          <option value="Popularity">Popularity #</option>
          <option value="Trending">Trending #</option>
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
        {HotelsArray.slice(
            actualPage * itemsPerPage,
            actualPage * itemsPerPage + itemsPerPage
          ).map((hotel, index) => {
            return <ManageListMember key = {index} hotel={hotel} />;
          })}
      </section>

      <div className="manage__pagination">
        <HotelListPagination
          maxNpages={maxNpages}
          actualPage={actualPage}
          setActualPage={setActualPage}
        />
      </div>
    </main>
  );
}

export default HotelManagement;
