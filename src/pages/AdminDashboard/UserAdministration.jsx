import React, { useEffect, useState, useRef } from "react";
import HotelListPagination from "../HotelList/HotelListPagination";
import UserListMember from "./UserListMember";

function ReservationVisualizer() {
  const [actualPage, setActualPage] = useState(0);
  const itemsPerPage = 5;
  const [maxNpages, setMaxNpages] = useState();
  const refProp = useRef(null);
  const userArr = [
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
    const res = userArr.length / itemsPerPage;
    setMaxNpages(res > parseInt(res) ? parseInt(res) + 1 : res);
  }, [userArr]);

  return (
    <main ref={refProp} className=''>
      <h1>Users Administration</h1>
      <label htmlFor="management__searchbar" />
      <div className="searchbar__ctn">
        <input type="text" className="management__searchbar" />
                 <select name="" id="">
           <option value="" disabled>
             -- sort by --
           </option>
           <option value="Id">Id</option>
           <option value="Name">Name</option>
           <option value="Role">Role</option>
         </select>
        <button>SEARCH</button>
      </div>

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
                index={index}
                user={user}
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
