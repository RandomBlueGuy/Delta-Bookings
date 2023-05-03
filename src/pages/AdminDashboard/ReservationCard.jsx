import React, { useState } from "react";

function ReservationCard({ booking }) {
  const [viewMore, setViewMore] = useState(false);
  // console.log(booking);
  return (
    <article
      className="ReservationCard"
      style={{
        borderColor: viewMore ? "var(--red-style)" : "var(--NavBar-btn)",
      }}
    >
      <section
        className="ReservationCard__header"
        onClick={() => {
          setViewMore(!viewMore);
        }}
        style={{
          backgroundColor: viewMore ? "var(--red-style)" : "var(--NavBar-btn)",
          color: viewMore ? "white" : "black",
        }}
      >
        <h2>
          Reservation at: {booking.HotelName} [{booking.createdAt.slice(0,10)}]
        </h2>
        <button
          onClick={() => {
            setViewMore(!viewMore);
          }}
        >
          {" "}
          <p className="">{viewMore ? "🞮" : "🞧"}</p>
        </button>
      </section>

      <section
        className="ReservationCard__body"
        style={{ display: viewMore ? "flex" : "none" }}
      >
        <div className="HotelMicroCard">
          <figure className="HotelMicroCard__HotelImg">
            <img src={`https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${Math.floor(Math.random() * 114) + 1}.jpeg`} alt="" />
          </figure>
          <div className="HotelMicroCard__text">
          <p className="">
              <strong>Reference: </strong>
               {booking.id}
            </p>
            <p className="">
              <strong>Hotel: </strong>
               {booking.HotelName}
            </p>
            <p className="">
              <strong>Location: </strong>
              {booking.HotelCity}, {booking.HotelCountry}
            </p>
            <p className="">
              <strong>Rooms: </strong>
              {booking.RoomType}
            </p>
            <p className="">
              <strong>Guests: </strong>
              {booking.NumberOfGuest}
            </p>
            <p className="">
              <strong>Special Requirements: </strong>
              {booking.SpecialReqs || "None"}
            </p>
          </div>
        </div>
        <div className="CheckTable">
          <table>
            <tr>
              <th>Check-in</th>
              <th>Check-out</th>
            </tr>
            <tr>
              <td>{booking.CheckInDate}</td>
              <td>{booking.CheckOutDate}</td>
            </tr>
          </table>
        </div>
        <div className="PaymentDetails">
          <table>
            <tr>
              <th colspan="2">
                <h3>Payment Details</h3>
              </th>
            </tr>
            <tr>
              <td>
                <strong> Name: </strong>
              </td>
              <td className="PaymentDetails__col2">{booking.payments.CardFirstName}</td>
            </tr>
            <tr>
              <td>
                <strong> Payment Option: </strong>
              </td>
              <td className="PaymentDetails__col2">Stripe</td>
            </tr>
            <tr>
              <td>
                <strong> Card Number: </strong>
              </td>
              <td className="PaymentDetails__col2">{booking.payments.CardNumber}</td>
            </tr>
            <tr>
              <td>
                <strong> Card Type: </strong>
              </td>
              <td className="PaymentDetails__col2">{booking.payments.CardSecondName}</td>
            </tr>
            <tr>
              <td>
                <strong> Base Price: </strong>
              </td>
              <td className="PaymentDetails__col2">{booking.payments.BasePrice}</td>
            </tr>
            <tr>
              <td>
                <strong> Taxes & fees total: </strong>
              </td>
              <td className="PaymentDetails__col2">{booking.payments.Tax}</td>
            </tr>
            <tr>
              <td>
                <strong> Total Nights: </strong>
              </td>
              <td className="PaymentDetails__col2">{(new Date(booking.CheckOutDate).getTime() - new Date(booking.CheckInDate).getTime()) / 86400000}</td>
            </tr>
            <tr>
              <td>
                <strong> Total: </strong>
              </td>
              <td className="PaymentDetails__col2">{booking.payments.FinalPrice}</td>
            </tr>
            <tr>
              <td style={{ opacity: "0" }}>.</td>
              <td style={{ opacity: "0" }}>.</td>
            </tr>
          </table>
        </div>
      </section>
    </article>
  );
}

export default ReservationCard;
