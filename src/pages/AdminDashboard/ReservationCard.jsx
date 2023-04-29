import React, { useState } from "react";
import placeHolderImg from "../../assets/Images/hotelPlaceholder.jpg";

function ReservationCard({ booking }) {
  const [viewMore, setViewMore] = useState(false);
  console.log(booking);
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
            <img src={placeHolderImg} alt="" />
          </figure>
          <div className="HotelMicroCard__text">
            <p className="">
              <strong>Hotel: </strong>
               {booking.HotelName}
            </p>
            <p className="">
              <strong>Location:</strong>
              [???]
            </p>
            <p className="">
              <strong>Rooms:</strong>
              {booking.RoomType}
            </p>
            <p className="">
              <strong>Guests:</strong>
              {booking.NumberOfGuest}
            </p>
            <p className="">
              <strong>Nights:</strong>
              [#]
            </p>
            <p className="">
              <strong>Special Requirements:</strong>
              [...]
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
              <td>[Check in Date]</td>
              <td>[Check out Date]</td>
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
              <td className="PaymentDetails__col2">{booking.Payments[0].CardFirstName}</td>
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
              <td className="PaymentDetails__col2">{booking.Payments[0].CardNumber}</td>
            </tr>
            <tr>
              <td>
                <strong> Card Type: </strong>
              </td>
              <td className="PaymentDetails__col2">{booking.Payments[0].CardSecondName}</td>
            </tr>
            <tr>
              <td>
                <strong> Base Price: </strong>
              </td>
              <td className="PaymentDetails__col2">[$$$]</td>
            </tr>
            <tr>
              <td>
                <strong> Promo code: </strong>
              </td>
              <td className="PaymentDetails__col2">[CODE]</td>
            </tr>
            <tr>
              <td>
                <strong> Taxes & fees total: </strong>
              </td>
              <td className="PaymentDetails__col2">[$$$]</td>
            </tr>
            <tr>
              <td>
                <strong> Total Nights: </strong>
              </td>
              <td className="PaymentDetails__col2">[#]</td>
            </tr>
            <tr>
              <td>
                <strong> Total: </strong>
              </td>
              <td className="PaymentDetails__col2">[$$$]</td>
            </tr>
            <tr>
              <td style={{ opacity: "0" }}>.</td>
              <td style={{ opacity: "0" }}>.</td>
            </tr>
            <tr>
              <td className="PaymentDetails__sub" colspan="2">
                <h3>Extras</h3>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p className="">[...]</p>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </article>
  );
}

export default ReservationCard;
