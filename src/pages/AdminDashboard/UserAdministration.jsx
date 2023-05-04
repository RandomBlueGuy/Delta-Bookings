import React, { useEffect, useState, useRef } from "react";
import HotelListPagination from "../HotelList/HotelListPagination";
import UserListMember from "./UserListMember";
import axios from "axios";
import FloatingMessage from "../UniversalComponents/FloatingMessage";

function ReservationVisualizer() {
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 5;
  const [maxNpages, setMaxNpages] = useState();
  const refProp = useRef(null);
  const [userArr, setUserArr] = useState([]);
  const [recallGet, setRecallGet] = useState(true);
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [showUpdate, setShowUpdate] = useState(false);


  useEffect(() => {
    if (recallGet) {
      axios.get(`${DB_URL}/api/users`).then((response) => {
        setUserArr(response.data.data);
      });
      setRecallGet(false);
      setShowUpdate(true)
    }
  }, [recallGet]);

  useEffect(() => {
    const res = userArr.length / itemsPerPage;
    setMaxNpages(res > parseInt(res) ? parseInt(res) + 1 : res);
  }, [userArr]);

  return (
    <main ref={refProp} className="">
      {showUpdate && (
        <FloatingMessage
          message={`Saving changes...`}
          setShowUpdate={setShowUpdate}
          showUpdate={showUpdate}
        />
      )}
      <h1>Users Administration</h1>
      <div className="reservations__list">
        {userArr
          .slice(
            actualPage * itemsPerPage,
            actualPage * itemsPerPage + itemsPerPage
          )
          .map((user, index) => {
            return (
              <UserListMember
                key={index}
                index={index + 1}
                user={user}
                setRecallGet={setRecallGet}
              />
            );
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
