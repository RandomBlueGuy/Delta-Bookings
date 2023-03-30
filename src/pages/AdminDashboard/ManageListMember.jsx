import React, { useState } from "react";

function ManageListMember({ hotel }) {
  const [viewMore, setViewMore] = useState(false);

  return (
    <article
      className="Management__Card"
      onClick={() => {
        setViewMore(!viewMore);
      }}
    >
      <div className="Management__Card--title">
        <h3>
          {hotel.HotelId}
          <span className="Management__separator">{" :: "}</span>
          {hotel.HotelName}
          <span className="Management__separator">{" :: "}</span>
          {hotel.loc_City}, {hotel.loc_Country}
        </h3>
        <div className="manage_btns">
          <button
            className="manage__more"
            onClick={() => {
              setViewMore(!viewMore);
            }}
          >
            ✚
          </button>
          <button className="manage__edit">✎</button>
          <button className="manage__del">🞮</button>
        </div>
      </div>
      <div
        className="Management__Card--body"
        style={{ display: viewMore ? "flex" : "none" }}
      >
        <p className="">
          <strong>Description: </strong>
          {hotel.HotelDescription}
        </p>
        <p className="">
          <strong>PhoneNumber: </strong>
          {hotel.CountryCode} {hotel.PhoneNumber}
        </p>
        <p className="">
          <strong>Email: </strong>
          {hotel.Email}
        </p>
        <p className="">
          <strong>Tags: </strong>
          {hotel.Tags[0]} , {hotel.Tags[1]}
        </p>
        <p className="">
          <strong>Popularity Number: </strong>
          {hotel.PopularityNumber}
        </p>
        <p className="">
          <strong>Trending Number: </strong>
          {hotel.TrendingNumber}
        </p>
        <p className="">
          <strong>Review Number: </strong>
          {hotel.ReviewNumber}
        </p>
        <p className="">
          <strong>Rooms Available: </strong>
          {hotel.Rooms.length}
        </p>
      </div>
    </article>
  );
}

export default ManageListMember;
