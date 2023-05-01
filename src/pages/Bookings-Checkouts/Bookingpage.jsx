import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";
import BookingInfo from "./BookingInfo";
import TravellerInfo from "./TravellerInfo";
import Payments from "./Payments";
import { useCookies } from "react-cookie";
import LoadingComp from "../UniversalComponents/LoadingComp";

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  function sendPayment(message, paymentInfo, card) {
    setIsLoading(true);
    if (paymentInfo.payment.status === "succeeded") {
      const transformedDateStr = new Date(
        `${searchParams.checkIn}T00:00:00.000Z`
      ).toISOString();

      const NumberOfGuest = Number(searchParams.guestsN);
      const booking = {
        HotelName: `${currentHotel.HotelName}`,
        RoomType: `${price.RoomName}`,
        CheckInDate: `${searchParams.checkIn}`,
        CheckOutDate: `${searchParams.checkOut}`,
        SpecialReqs: `${TravellerInfoObj.specialRequest}`,
        HotelCity: `${currentHotel.loc_City}`,
        HotelCountry: `${currentHotel.loc_Country}`,
        NumberOfGuest: NumberOfGuest,
        payments: {
          create: {
            CardFirstName: `${TravellerInfoObj.fullName}`,
            CardSecondName: `${card.brand}`,
            CardBankEntity: "Bank2",
            CardNumber: `**** **** **** ${card.last4}`,
            CardType: 2,
            FinalPrice: price.finalPrice,
            Tax: price.tax,
            BasePrice: price.basePrice,
            PromoCode: false,
            Status: "Successful",
          },
        },
      };

      axios
        .post(`${DB_URL}/api/bookings`, booking, {
          headers: { Authorization: `Bearer ${cookies.cookieToken}` },
        })
        .then((response) => {
          setIsLoading(false);
          console.log("booking Success!!!!'", response.data.data.id);
          navigate(`/checkout-success/scss?id=${response.data.data.id}`)
        })

        .catch((error) => {
          console.log("Error creating booking:", error.message);
        });
    }
  }

  return (
    <div>
      <div className="booking-info">
        {isLoading === true && <LoadingComp />}
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
