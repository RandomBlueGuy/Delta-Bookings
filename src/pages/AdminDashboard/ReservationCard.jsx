import React, { useState } from "react";
import placeHolderImg from "../../assets/Images/hotelPlaceholder.jpg";

function ReservationCard({index , reservation}) {
  const [viewMore, setViewMore] = useState(false);

  return (
    <article className="ReservationCard"
    style={{borderColor: viewMore ? "var(--red-style)" : "var(--NavBar-btn)"}}
    >
      <section className="ReservationCard__header"
      onClick={() => {setViewMore(!viewMore)}}
      style={{
        backgroundColor: viewMore ? "var(--red-style)" : "var(--NavBar-btn)",
        color: viewMore ? "white" : "black",
        
      }}
      >
        <h2>Reservation [# {reservation}] - [UserName] [Reservation date]</h2>
        <button
        onClick={() => {setViewMore(!viewMore)}}
        >🞮</button>
      </section>

      <section className="ReservationCard__body"
      style={{display: viewMore ? "flex" : "none"}}
      
      >
        <div className="HotelMicroCard">
          <figure className="HotelMicroCard__HotelImg">
            <img src={placeHolderImg} alt="" />
          </figure>
          <div className="HotelMicroCard__text">
            <p className="">
              <strong>Hotel:</strong>
              [HotelName] [{reservation}]
            </p>
            <p className="">
              <strong>Location:</strong>
              [city] [country]
            </p>
            <p className="">
              <strong>Rooms:</strong>
              [#][RoomName]...
            </p>
            <p className="">
              <strong>Guests:</strong>
              [# Guests]
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
              <td className="PaymentDetails__col2">[Full name]</td>
            </tr>
            <tr>
              <td>
                <strong> Payment Option: </strong>
              </td>
              <td className="PaymentDetails__col2">[Payment Option]</td>
            </tr>
            <tr>
              <td>
                <strong> Card Number: </strong>
              </td>
              <td className="PaymentDetails__col2">[#]</td>
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
