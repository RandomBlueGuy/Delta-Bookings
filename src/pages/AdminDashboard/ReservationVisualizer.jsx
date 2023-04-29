import React, { useEffect, useState, useRef } from "react";
import HotelListPagination from "../HotelList/HotelListPagination";
import ReservationCard from "./ReservationCard";

function ReservationVisualizer() {
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 5;
  const [maxNpages, setMaxNpages] = useState();
  const refProp = useRef(null);
  const reservationsArr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];

  useEffect(() => {
    const res = reservationsArr.length / itemsPerPage;
    setMaxNpages(res > parseInt(res) ? parseInt(res) + 1 : res);
  }, [reservationsArr]);

  return (
    <main ref={refProp}>
      <h1>Reservation Visualizer</h1>
      <label htmlFor="management__searchbar" />
      <div className="searchbar__ctn">
        <input type="text" className="management__searchbar" />
        <select name="" id="">
          <option value="" disabled>
            -- sort by --
          </option>
          <option value="Id">Id</option>
          <option value="Location">Location</option>
          <option value="User">User</option>
        </select>
        <button>SEARCH</button>
      </div>

      <div className="reservations__list">
        {/* {reservationsArr
          .slice(
            actualPage * itemsPerPage,
            actualPage * itemsPerPage + itemsPerPage
          )
          .map((reservation, index) => {
            return (
              <ReservationCard
                key={index}
                index={index}
                reservation={reservation}
              />
            );
          })} */}
      </div>

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

export default ReservationVisualizer;
