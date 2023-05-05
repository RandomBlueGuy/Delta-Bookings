import React, { useEffect, useState, useRef } from "react";
import HotelListPagination from "../HotelList/HotelListPagination";
import ReservationCard from "./ReservationCard";
import axios from "axios";

function ReservationVisualizer() {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 5;
  const [maxNpages, setMaxNpages] = useState();
  const refProp = useRef(null);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(`${DB_URL}/api/bookings`)
      .then((response) => setReservations(response.data.data));
  }, []);

  useEffect(() => {
    const res = reservations.length / itemsPerPage;
    setMaxNpages(res > parseInt(res) ? parseInt(res) + 1 : res);
  }, [reservations]);

  return (
    <main ref={refProp}>
      <h1>Reservation Visualizer</h1>
      <div className="reservations__list">
        {reservations
          .slice(
            actualPage * itemsPerPage,
            actualPage * itemsPerPage + itemsPerPage
          )
          .map((reservation, index) => {
            return <ReservationCard key={index} booking={reservation} />;
          })}
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
