import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const HotelSingleContext = createContext();

export const HScontextProvider = ({ children }) => {
  const location = useLocation();
  const currentHotelInfo = location.state?.data;
  console.log("CURRENT HOTEL ON DISPLAY HS", currentHotelInfo);
  
  return (
    <HotelSingleContext.Provider value={currentHotelInfo}>
      {children}
    </HotelSingleContext.Provider>
  );
};
