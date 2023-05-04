import React, { useState, useEffect } from "react";
import axios from "axios";
import WarningMessage from "../UniversalComponents/WarningMessage";

function ManageListMember({ hotel, index, chooseHotelEdit }) {
  const [viewMore, setViewMore] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningResult, setWarningResult] = useState(false);
  const [display, setDisplay] = useState(true);

  const DB_URL = process.env.REACT_APP_BACKEND_URL;

  const deleteHotel = (event) => {
    event.preventDefault();
    setShowWarning(true);
  };

  useEffect(() => {
    if (warningResult === true) {
      axios
        .delete(`${DB_URL}/api/hotels/${hotel.id}`)
        .then((response) => {
          console.log(hotel.HotelName, "Deleted", response);
          setDisplay(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [warningResult]);

  return (
    <article
      className='Management__Card'
      style={{
        display: display ? "block" : "none",
      }}
    >
      {showWarning && (
        <WarningMessage
          warningMessage={`Are you sure you want to delete ${hotel.HotelName}?`}
          warningTitle={"You are going to delete a hotel"}
          setShowWarning={setShowWarning}
          setWarningResult={setWarningResult}
        />
      )}

      <div className='Management__Card--title'>
        <div
          className='Management__Card--id'
          onClick={() => {
            setViewMore(!viewMore);
          }}
        >
          <div>
            <h3>
              {index}
              <span className='Management__separator'>{" :: "}</span>
            </h3>
          </div>
          <h3>
            {hotel.HotelName}
            <span className='Management__separator'>{" :: "}</span>
            {hotel.loc_City}, {hotel.loc_Country}
          </h3>
        </div>
        <div className='manage_btns'>
          <button
            className='manage__edit'
            onClick={() => chooseHotelEdit(hotel)}
          >
            ✎
          </button>
          <button className='manage__del' onClick={deleteHotel}>
            🞮
          </button>
        </div>
      </div>
      <div
        className='Management__Card--body'
        style={{ display: viewMore ? "flex" : "none" }}
      >
        <p className=''>
          <strong>Description: </strong>
          {hotel.HotelDescription}
        </p>
        <p className=''>
          <strong>PhoneNumber: </strong>
          {hotel.CountryCode} {hotel.PhoneNumber}
        </p>
        <p className=''>
          <strong>Email: </strong>
          {hotel.Email}
        </p>
        <p className=''>
          <strong>Tags: </strong>
          {`${hotel.Tags.split("-/-").join(", ")}`}
        </p>
        <p className=''>
          <strong>Popularity Number: </strong>
          {hotel.PopularityNumber}
        </p>
        <p className=''>
          <strong>Trending Number: </strong>
          {hotel.TrendingNumber}
        </p>
        <p className=''>
          <strong>Review Number: </strong>
          {hotel.ReviewNumber}
        </p>
        <p className=''>
          <strong>Rooms Available: </strong>
          {hotel.Rooms.length}
        </p>
      </div>
    </article>
  );
}

export default ManageListMember;
