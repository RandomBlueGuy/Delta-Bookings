import React from "react";
import "./CheckCard.css";
import GoogleMap from "google-map-react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CheckCard({ currentHotel }) {
  const minDate = new Date().toISOString().split("T")[0];

  return (
    <section className='check__card'>
      <div className='check__card-map'>
        <GoogleMap
          center={{
            lat: Number(currentHotel.loc_Lat),
            lng: Number(currentHotel.loc_Lng),
          }}
          zoom={20}
        ></GoogleMap>
      </div>
      <section className='check__card-info'>
        <div className='check__card-rate'>
          <h4 className='rate-title'>[RATE TYPE]</h4>
          <p className='rate-description'>
            <FontAwesomeIcon icon={faCheck} />
            [SERVICE INFO]
          </p>
          <p className='rate-description'>
            <FontAwesomeIcon icon={faCheck} />
            [SERVICE INFO]
          </p>
        </div>

        <div className='check__card-price'>
          <p>Per Nigth</p>
          <h2>${parseInt(currentHotel.Rooms[0].OriginalPricePerNight)}</h2>
          <h1>
            $
            {parseInt(
              currentHotel.Rooms[0].OriginalPricePerNight -
                (currentHotel.Rooms[0].OriginalPricePerNight *
                  currentHotel.Rooms[0].Discount) /
                  100
            )}
          </h1>
        </div>
      </section>

      <form className='check__card-form' action=''>
        <label htmlFor='check-in'>Check-in Date</label>
        <input type='date' min={minDate} placeholder='Check-In Date' />
        <label htmlFor='check-out'>Check-out Date</label>
        <input type='date' min={minDate} placeholder='Check-out Date' />
        <div className='Guest__select'>
          <strong>City:</strong>
          <p>[City]</p>
        </div>
        <div className='Guest__select'>
          <strong>Rooms:</strong>
          <p>
            [.................... ................
            ........................................]
          </p>
        </div>
        <div className='Guest__select'>
          <strong>Guests:</strong>
          <select name='' id=''>
            <option value=''>1</option>
            <option value=''>2</option>
            <option value=''>...</option>
            <option value=''>10</option>
          </select>
        </div>
        <button className='search-btn'>Book This Now</button>
      </form>
    </section>
  );
}

export default CheckCard;
