import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const HotelSingleContext = createContext();

export const HScontextProvider = ({ children }) => {
  const location = useLocation();
  const currentHotelInfo = location.state?.data;
  // const [hotelDataAxios, setHotelDataAxios] = useState({});

  // useEffect(() => {
  //     fetch("/DB/HotelDataBase.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setHotelDataAxios(data[0]);
  //       })
  //       .catch((err) => console.log(err));


  // }, []);
  return (
    <HotelSingleContext.Provider value={currentHotelInfo}>
      {children}
    </HotelSingleContext.Provider>
  );
};
