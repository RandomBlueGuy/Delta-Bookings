import React, { useEffect, useState } from "react";
import HotelListPagination from "../HotelList/HotelListPagination";
import ReservationCard from "./ReservationCard";

function ReservationVisualizer() {
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 4;
  const [maxNpages, setMaxNpages] = useState();
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
    <main>
      <h1>Reservation Visualizer</h1>
      <ol>
        <li>Create Booking card component</li>
        <li>Create base prompt dummy</li>
        <li>fill reservations in a .JSON file</li>
        <li>Create some Axios magic</li>
        <li>Map the obtained results in a new card each</li>
        <li>Don't cry at night</li>
        <li>Drink to forget the nightmares</li>
        <li>Profit</li>
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

      <div className="reservations__list">
        {reservationsArr
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
          })}
      </div>

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

export default ReservationVisualizer;
