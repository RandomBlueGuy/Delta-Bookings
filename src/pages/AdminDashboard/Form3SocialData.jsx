import React, {useState} from "react";

function Form3SocialData({setFormTab, formTab, scrollToTop}) {
  const [info, setInfo]= useState({
    hotelPopularity:"",
    hotelTrending:"",
    hotelFacebook:"",
    hotelInstagram:"",
    hotelTwitter:"",
    hotelPinterest:""
  })

  const {
    hotelPopularity,
    hotelTrending,
    hotelFacebook,
    hotelInstagram,
    hotelTwitter,
    hotelPinterest
  } =info
  
  const [errors, setErrors]=useState({})

  const handleChange = (event) =>{
    const {name, value}= event.target
    setInfo({...info, [name]:value})
  }

  
  const handleInfo = (event) =>{
    /*Here I consider that there should not
    be validations, these data is completely optional.
    */
    
    event.preventDefault();
    const validationErrors={}
  }

  return (
    <form
      action=""
      className="CreateHotel--subHotel CH__form3"
      onSubmit={handleInfo}
    >
      <h2>Social Data</h2>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="hotelPopularity">
          Popularity #:
        </label>
        <input
          id="inp1"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's popularity number"
          name='hotelPopularity'
          onChange={(event) => handleChange(event)}
          value={hotelPopularity}
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="hotelTrending">
          Trending #:
        </label>
        <input
          id="inp2"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's popularity number"
          name='hotelTrending'
          onChange={(event) => handleChange(event)}
          value={hotelTrending}
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="hotelFacebook">
          Facebook:
        </label>
        <input
          id="inp3"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's facebook fanpage"
          name='hotelFacebook'
          onChange={(event) => handleChange(event)}
          value={hotelFacebook}
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="hotelInstagram">
          Instagram:
        </label>
        <input
          id="inp4"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's Instagram fanpage"
          name='hotelInstagram'
          onChange={(event) => handleChange(event)}
          value={hotelInstagram}
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="hotelTwitter">
          Twitter:
        </label>
        <input
          id="inp5"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's Twitter page"
          name='hotelTwitter'
          onChange={(event) => handleChange(event)}
          value={hotelTwitter}
        />
      </div>
      <div className="HotelCreator__form--line">
        <label className="HotelCreator__label" htmlFor="hotelPinterest">
          Pinterest:
        </label>
        <input
          id="inp5"
          className="HotelCreator__input"
          type="text"
          placeholder="Write your hotel's Pinterest page"
          name='hotelPinterest'
          onChange={(event) => handleChange(event)}
          value={hotelPinterest}
        />
      </div>

      <div className="HotelForm__footer">
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            
            setFormTab(2);
            scrollToTop();
          }}
        >
          🡸
        </button>
        Step {formTab} / 5
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            
            setFormTab(4);
            scrollToTop();
          }}
        >
          🢂
        </button>
      </div>
    </form>
  );
}

export default Form3SocialData;
