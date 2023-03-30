import React from 'react'

function Form2LocationData({setFormTab, formTab, scrollToTop}) {
  return (
   <form
   action=""
   className="CreateHotel--subHotel CH__form2"
 >
   <h2>Location data</h2>
   <div className="HotelCreator__form--line">
     <label className="HotelCreator__label" htmlFor="inp1">
       Address:
     </label>
     <input
       id="inp1"
       className="HotelCreator__input"
       type="text"
       placeholder="Write your hotel address"
     />
   </div>
   <div className="HotelCreator__form--line">
     <label className="HotelCreator__label" htmlFor="inp2">
       City:
     </label>
     <input
       id="inp2"
       className="HotelCreator__input"
       type="text"
       placeholder="city"
     />
   </div>
   <div className="HotelCreator__form--line">
     <label className="HotelCreator__label" htmlFor="inp3">
       State:
     </label>
     <input
       id="inp3"
       className="HotelCreator__input"
       type="text"
       placeholder="State"
     />
   </div>
   <div className="HotelCreator__form--line">
     <label className="HotelCreator__label" htmlFor="inp4">
       Country:
     </label>
     <input
       id="inp4"
       className="HotelCreator__input"
       type="text"
       placeholder="Write your hotel's country"
     />
   </div>
   <div className="HotelCreator__form--line">
     <label className="HotelCreator__label" htmlFor="inp5">
       Latitude:
     </label>
     <input
       id="inp5"
       className="HotelCreator__input"
       type="text"
       placeholder="Write your hotel's latitude"
     />
   </div>
   <div className="HotelCreator__form--line">
     <label className="HotelCreator__label" htmlFor="inp5">
       Longitude:
     </label>
     <input
       id="inp5"
       className="HotelCreator__input"
       type="text"
       placeholder="Write your hotel's Longitude"
     />
   </div>

   <div className="HotelForm__footer">
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            event.preventDefault();
            setFormTab(1);
            scrollToTop();
          }}
        >
          🡸
        </button>
        Step {formTab} / 5
        <button
          className="HotelCreator__form--microSubmit"
          onClick={(event) => {
            event.preventDefault();
            setFormTab(3);
            scrollToTop();
          }}
        >
          🢂
        </button>
      </div>
 </form>
  )
}

export default Form2LocationData