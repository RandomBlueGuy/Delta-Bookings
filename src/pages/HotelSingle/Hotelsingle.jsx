import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchData } from "../../ReduxStore/Slices/FetchData/fetchDataSlice";
import "./Hotelsingle.css";
import "../UniversalComponents/BaseStyles.css";
import ContactInfoCard from "./ContactInfoCard";
import HotelSingleCardHeader from "./HotelSingleCardHeader";
import HotelSingleGallery from "./HotelSingleGallery";
import HotelInfoDisplay from "./HotelInfoDisplay";
import CheckCard from "./CheckCard";
import LoadingComp from '../UniversalComponents/LoadingComp';

export default function Hotelsingle() {
  const currentHotel = useSelector((state) => state.fetchData.hotelSingle);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = Object.fromEntries(new URLSearchParams(location.search));
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [reviews, setReviews] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({});
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchData(searchParams));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${DB_URL}/api/reviews`)
      .then((response) =>
        setReviews(() => {
          const res = [];
          for (let i = 0; i < 5; i++) {
            res.push(
              response.data.data[
                Math.floor(Math.random() * response.data.data.length)
              ]
            );
          }
          return res;
        })
      )
      .catch((error) => console.log(error.message));
        setInterval(() => {
          setLoading(false)
        }, 1000);
  }, []);

  
  function roomChanger(newRoom) {
    setSelectedRoom(() => newRoom);
  }

  return (
    <div className="hotelsingle__maxcontainer">
      {loading === true && <LoadingComp />}
      <main className="hotel__single-container">
        {currentHotel && <HotelSingleCardHeader currentHotel={currentHotel} />}
        <div className="hotels__container-columns">
          <div className="container-column1">
            {currentHotel && <HotelSingleGallery currentHotel={currentHotel} />}
            {currentHotel && (
              <HotelInfoDisplay
                currentHotel={currentHotel}
                reviews={reviews}
                roomChanger={roomChanger}
              />
            )}
            <section className="hotel__ctn-displayCard">
              {/* {							
              <HotelCard />
							<HotelCard />
							<HotelCard />} */}
            </section>
          </div>
          <div className="container-column2">
            <section className="contactInfo__display">
              {currentHotel && (
                <CheckCard
                  currentHotel={currentHotel}
                  searchParams={searchParams}
                  selectedRoom={selectedRoom}
                />
              )}
            </section>
            <section className="contactInfo__display">
              {currentHotel && <ContactInfoCard currentHotel={currentHotel} />}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
