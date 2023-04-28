import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";
import BookingInfo from "./BookingInfo";
import TravellerInfo from "./TravellerInfo";
import Payments from "./Payments";

function Bookingpage() {
  const proceed = false;
  const location = useLocation();
  const searchParams = Object.fromEntries(new URLSearchParams(location.search));
  const dispatch = useDispatch();
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const currentHotel = useSelector((state) => state.fetchData.hotelSingle);
  const [price, setPrice] = useState({});
  const [TravellerInfoObj, setTravellerInfoObj] = useState({});

  // console.log("AAAAAAAAAAAAAAAAA", price);

  useEffect(() => {
    dispatch(fetchData(searchParams));
  }, [dispatch]);

  useEffect(() => {
    if (currentHotel) {
      const [currentRoom] = currentHotel.Rooms.filter((room) => {
        return room.id === searchParams.roomId;
      });

      const nights =
        Math.floor(
          new Date(searchParams.checkOut).getTime() / 1000 / 3600 / 24
        ) -
        Math.floor(new Date(searchParams.checkIn).getTime() / 1000 / 3600 / 24);

      const basePrice = currentRoom.OriginalPricePerNight * nights;
      const discount = Math.floor((basePrice * currentRoom.Discount) / 100);
      const tax = Math.floor(discount * 0.19);
      const finalPrice = Math.floor(basePrice - discount + tax);

      setPrice({
        RoomName: currentRoom.RoomName,
        nights,
        basePrice,
        discount,
        tax,
        finalPrice,
      });
    }
  }, [currentHotel]);

  function fillTravellerInfo(
    fullName,
    email,
    phoneNumber,
    specialRequest,
    coupon
  ) {
    setTravellerInfoObj({
      fullName,
      email,
      phoneNumber,
      specialRequest,
      coupon,
    });
    console.log(TravellerInfoObj);
  }

  return (
    <div>
      <div className="booking-info">
        {currentHotel && (
          <BookingInfo
            searchParams={searchParams}
            hotelName={currentHotel.HotelName}
            hotelCity={currentHotel.loc_City}
            hotelCountry={currentHotel.loc_Country}
            hotelImg={currentHotel.FrontImg}
            price={price}
          />
        )}
        {proceed && <Payments />}
        {!proceed && <TravellerInfo fillTravellerInfo={fillTravellerInfo} />}
      </div>
    </div>
  );
}

export default Bookingpage;
