import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";
import BookingInfo from "./BookingInfo";
import TravellerInfo from "./TravellerInfo";
import Payments from "./Payments";
import { useCookies } from "react-cookie";

function Bookingpage() {
  const [cookies] = useCookies(["cookieToken"]);
  const [proceed, setProceed] = useState(false);
  const location = useLocation();
  const searchParams = Object.fromEntries(new URLSearchParams(location.search));
  const dispatch = useDispatch();
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const currentHotel = useSelector((state) => state.fetchData.hotelSingle);
  const [price, setPrice] = useState({});
  const [TravellerInfoObj, setTravellerInfoObj] = useState({});
  // console.log("price", price);
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

  useEffect(() => {
    // console.log("Exists")
    if (TravellerInfo !== undefined) {
      // setProceed(true)
    }
  }, [TravellerInfo.email]);

  function fillTravellerInfo(
    fullName,
    email,
    phoneNumber,
    specialRequest,
    coupon
  ) {
    setTravellerInfoObj(() => {
      return {
        fullName,
        email,
        phoneNumber,
        specialRequest,
        coupon,
      };
    });

    setProceed(() => true);
  }
  // console.log("SET TRAVELER INFO", TravellerInfoObj)
  function sendPayment(message, paymentInfo, card) {
    console.log("payment sent");
    // console.log();

    if (paymentInfo.payment.status === "succeeded") {
      const transformedDateStr = new Date(
        `${searchParams.checkIn}T00:00:00.000Z`
      ).toISOString();

      const NumberOfGuest = Number(searchParams.guestsN);
      console.log(searchParams.checkIn);
      const booking = {
        HotelName: `${currentHotel.HotelName}`,
        RoomType: `${price.RoomName}`,
        DateOfStay: `${transformedDateStr}`,
        NumberOfGuest: NumberOfGuest,
        Payments: {
          create: {
            CardFirstName: `${TravellerInfoObj.fullName}`,
            CardSecondName: `${card.brand}`,
            CardBankEntity: "Bank2",
            CardNumber: `**** **** **** ${card.last4}`,
            CardType: 2,
            CardYear: card.exp_year,
            CardMonth: card.exp_month,
            CardCcv: 999,
            Status: "Successful",
          },
        },
      };

      // console.log("beforeAxios", booking);

      axios
        .post(`${DB_URL}/api/bookings`, booking, {
          headers: { Authorization: `Bearer ${cookies.cookieToken}` },
        })
        .then(() => console.log("booking Success!!!!"))
        .catch((error) => {
          console.log("Error creating booking:", error.message);
        });
    }
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
        {proceed && (
          <Payments sendPayment={sendPayment} finalPrice={price.finalPrice} />
        )}
        {!proceed && <TravellerInfo fillTravellerInfo={fillTravellerInfo} />}
      </div>
    </div>
  );
}

export default Bookingpage;
