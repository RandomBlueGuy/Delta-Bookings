import React, { useState, useEffect } from "react";

import Form1BasicInfo from "./Form1BasicInfo";
import Form2LocationData from "./Form2LocationData";
import Form3SocialData from "./Form3SocialData";
import Form4Gallery from "./Form4Gallery";
import Form5RoomForm from "./Form5RoomForm";
import axios from "axios";
import RoomList from "./RoomList";
import WarningMessage from "../UniversalComponents/WarningMessage";
import FloatingMessage from "../UniversalComponents/FloatingMessage";

function HotelUpdater({ hotel = {} }) {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [formTab, setFormTab] = useState(1);
  const [create, setCreate] = useState(hotel.Rooms);
  const [deleteRoomData, setDeleteRoomData] = useState(null);
  const [updateRoomIndex, setUpdateRoomIndex] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningResult, setWarningResult] = useState(false);
  const [floatingMessageDescription, setFloatingMessageDescription] = useState("");
  const [hotelForm, setHotelForm] = useState({
    HotelName: hotel.HotelName,
    Website: hotel.Website,
    location: hotel.location,
    category: "Category",
    loc_Lat: hotel.loc_Lat,
    loc_Lng: hotel.loc_Lng,
    loc_Place: hotel.loc_Place,
    loc_City: hotel.loc_City,
    loc_State: hotel.loc_State,
    loc_Country: hotel.loc_Country,
    FrontImg: hotel.FrontImg,
    Gallery: hotel.Gallery,
    PhoneNumber: hotel.PhoneNumber,
    CountryCode: hotel.CountryCode,
    Email: hotel.Email,
    HotelDescription: hotel.HotelDescription,
    StarRating: 0,
    ReviewNumber: 0,
    Tags: hotel.Tags,
    SpecialTags: hotel.SpecialTags,
    PopularityNumber: 0,
    DateAdded: hotel.DateAdded,
    TrendingNumber: 0,
    SN_Facebook: hotel.SN_Facebook,
    SN_Twitter: hotel.SN_Twitter,
    SN_Instagram: hotel.SN_Instagram,
    SN_Pinterest: hotel.SN_Pinterest,
    Rooms: {},
  });

  const [roomForm, setRoomForm] = useState({
    Facility: "Floors [20 -30]",
    Available: true,
    RoomImg: "",
    RoomName: "",
    OriginalPricePerNight: 0,
    Discount: 0,
    About: "",
    Facility: "Floors 00 - 20",
    Amenities: "",
    Inclusions: "",
  });

  // console.log("hotelForm", hotelForm);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function nextFormTab(direction) {
    if (direction === "right") {
      setFormTab(formTab + 1);
      if (formTab >= 5) {
        setFormTab(1);
      }
    } else {
      setFormTab(formTab - 1);
      if (formTab <= 1) {
        setFormTab(5);
      }
    }
  }

  function form1Constructor(
    HotelName,
    Website,
    PhoneNumber,
    Email,
    HotelDescription,
    FrontImg,
    Tags
  ) {
    if (FrontImg === undefined) {
      FrontImg = hotelForm.FrontImg;
    }
    console.log("front Imag", FrontImg);
    setHotelForm({
      ...hotelForm,
      HotelName,
      Website,
      PhoneNumber,
      Email,
      HotelDescription,
      FrontImg,
      Tags,
    });
  }

  function form2Constructor(
    loc_Place,
    loc_City,
    loc_State,
    loc_Country,
    loc_Lat,
    loc_Lng
  ) {
    setHotelForm({
      ...hotelForm,
      loc_Place,
      loc_City,
      loc_State,
      loc_Country,
      loc_Lat,
      loc_Lng,
    });
  }

  function form3Constructor(
    PopularityNumber,
    TrendingNumber,
    SN_Facebook,
    SN_Instagram,
    SN_Twitter,
    SN_Pinterest
  ) {
    PopularityNumber = parseInt(PopularityNumber);
    TrendingNumber = parseInt(TrendingNumber);
    setHotelForm({
      ...hotelForm,
      PopularityNumber,
      TrendingNumber,
      SN_Facebook,
      SN_Instagram,
      SN_Twitter,
      SN_Pinterest,
    });
  }

  function form4Constructor(Gallery) {
    //USE -//-
    console.log(Gallery);
    setHotelForm({ ...hotelForm, Gallery });
  }

  function form5Constructor(
    RoomImg,
    RoomName,
    OriginalPricePerNight,
    Discount,
    About,
    Amenities,
    Inclusions,
    isItUpdating,
    roomId
  ) {
    Discount = Number(Discount);
    OriginalPricePerNight = Number(OriginalPricePerNight);
    console.log("IMAGE TAKEN FOR ROOM", RoomImg);
    if (isItUpdating === true) {
      setCreate(
        create.filter((room) => {
          return room.id !== roomId;
        })
      );
      setRoomForm({
        ...roomForm,
        RoomImg,
        RoomName,
        OriginalPricePerNight,
        Discount,
        About,
        Amenities,
        Inclusions,
        id: roomId,
      });
    } else {
      setRoomForm({
        ...roomForm,
        RoomImg,
        RoomName,
        OriginalPricePerNight,
        Discount,
        About,
        Amenities,
        Inclusions,
      });
    }
  }

  useEffect(() => {
    if (roomForm.RoomName !== "") {
      setCreate([...create, roomForm]);
      setFloatingMessageDescription("Room Updated")
      setShowUpdate(true);
    }
  }, [roomForm]);

  // console.log(hotelForm);

  useEffect(() => {
    console.log(updateRoomIndex);
    // setCreate(create.filter((room, index) => index !== deleteRoomData));
  }, [updateRoomIndex]);

  useEffect(() => {
    // console.log(deleteRoomData)
    setCreate(create.filter((room, index) => index !== deleteRoomData));
  }, [deleteRoomData]);

  const updateHotel = async () => {
    const roomUpdateArr = create.map((room) => room.id);
    // console.log("createIMG", create[0].RoomImg);
    setHotelForm({
      ...hotelForm,
      Rooms: create,
    });
  };

  useEffect(() => {
    if (warningResult === true) {
      axios
        .put(`${DB_URL}/api/hotels/${hotel.id}`, {
          HotelName: `${hotelForm.HotelName}`,
          Website: `${hotelForm.Website}`,
          location: "",
          category: "",
          loc_Lat: `${hotelForm.loc_Lat}`,
          loc_Lng: `${hotelForm.loc_Lng}`,
          loc_Place: `${hotelForm.loc_Place}`,
          loc_City: `${hotelForm.loc_City}`,
          loc_State: `${hotelForm.loc_State}`,
          loc_Country: `${hotelForm.loc_Country}`,
          FrontImg: `${hotelForm.FrontImg}`,
          Gallery: `${hotelForm.Gallery}`,
          PhoneNumber: `${hotelForm.PhoneNumber}`,
          CountryCode: `${Math.floor(Math.random() * 80) + 10}`,
          Email: `${hotelForm.Email}`,
          HotelDescription: `${hotelForm.HotelDescription}`,
          StarRating: 5,
          ReviewNumber: 0,
          Tags: `${hotelForm.Tags}`,
          SpecialTags: `Recommended`,
          PopularityNumber: 100,
          DateAdded: "2022-10-21T03:35:24.658Z",
          TrendingNumber: 0,
          SN_Facebook: `${hotelForm.SN_Facebook}`,
          SN_Twitter: `${hotelForm.SN_Twitter}`,
          SN_Instagram: `${hotelForm.SN_Instagram}`,
          SN_Pinterest: `${hotelForm.SN_Pinterest}`,
          Rooms: {
            create,
          },
        })
        .then((response) => {
          console.log("Hotel Updated!");
          setFloatingMessageDescription("Hotel Updated")
          setWarningResult(false);
          setShowUpdate(true)
          setFormTab(1);
        })
        .catch((error) => console.log(error.message));

      const imgArr = create.map((room) => room.RoomImg);
      console.log(imgArr);

      for (let i = 0; i < create.length; i++) {
        axios
          .put(`${DB_URL}/api/rooms/${create[i].id}`, {
            Available: true,
            RoomImg: `${create[i].RoomImg}`,
            RoomName: `${create[i].RoomName}`,
            OriginalPricePerNight: parseInt(create[i].OriginalPricePerNight),
            Discount: parseInt(create[i].Discount),
            About: `${create[i].About}`,
            Facility: `${create[i].Facility}`,
            Amenities: `${create[i].Amenities}`,
            Inclusions: `${create[i].Inclusions}`,
          })
          .then((response) => {
            console.log("Room updated", response);
          })
          .catch(() => console.log("The room could not be updated"));
      }
    }
  }, [warningResult]);

  return (
    <main className="HotelCreator">
      {showUpdate && (
        <FloatingMessage
          message={floatingMessageDescription}
          setShowUpdate={setShowUpdate}
          showUpdate={showUpdate}
        />
      )}

      {showWarning && (
        <WarningMessage
          warningMessage={"You are going to change a hotel permanently"}
          warningTitle={
            "Are you sure you want to update this hotel with the information provided?"
          }
          setShowWarning={setShowWarning}
          setWarningResult={setWarningResult}
        />
      )}
      <h1>Updating {hotel.HotelName}</h1>
      <section style={{ display: formTab === 1 ? "block" : "none" }}>
        <Form1BasicInfo
          setFormTab={setFormTab}
          formTab={formTab}
          scrollToTop={scrollToTop}
          form1Constructor={form1Constructor}
          hotel={hotel}
        />
      </section>

      <section style={{ display: formTab === 2 ? "block" : "none" }}>
        <Form2LocationData
          setFormTab={setFormTab}
          formTab={formTab}
          scrollToTop={scrollToTop}
          form2Constructor={form2Constructor}
          hotel={hotel}
        />
      </section>

      <section style={{ display: formTab === 3 ? "block" : "none" }}>
        <Form3SocialData
          setFormTab={setFormTab}
          formTab={formTab}
          scrollToTop={scrollToTop}
          form3Constructor={form3Constructor}
          hotel={hotel}
        />
      </section>

      <section style={{ display: formTab === 4 ? "block" : "none" }}>
        <h2>Gallery</h2>
        <Form4Gallery
          setFormTab={setFormTab}
          formTab={formTab}
          scrollToTop={scrollToTop}
          form4Constructor={form4Constructor}
          hotel={hotel}
        />
      </section>

      <section
        className="HC__FormCtn"
        style={{ display: formTab === 5 ? "block" : "none" }}
      >
        <div className="RoomsCreated">
          {create.length === 0 ? (
            <h3>No Rooms have been created</h3>
          ) : (
            <div>
              <h2>Rooms created {create.length}</h2>
              {create.map((room, index) => {
                return (
                  <RoomList
                    delNum={index + 1}
                    roomName={room.RoomName}
                    setUpdateRoomIndex={setUpdateRoomIndex}
                    setDeleteRoomData={setDeleteRoomData}
                  />
                );
              })}
            </div>
          )}
        </div>
        <Form5RoomForm
          length={create.length}
          form5Constructor={form5Constructor}
          roomInfo={create[updateRoomIndex]}
          isItUpdating={true}
        />

        <div className="HotelForm__footer">
          <button
            className="HotelCreator__form--microSubmit"
            onClick={() => {
              nextFormTab("left");
            }}
          >
            🡸
          </button>
          Step {formTab} / 5
          <button
            className="HotelCreator__form--microSubmit"
            onClick={() => {
              setShowWarning(true);
              updateHotel();
            }}
          >
            Create Hotel
          </button>
        </div>
      </section>
    </main>
  );
}

export default HotelUpdater;
