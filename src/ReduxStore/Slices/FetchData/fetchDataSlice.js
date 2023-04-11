import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataSlice = createSlice({
  name: "fetchDataSlice",
  initialState: {
    HotelsArray: [],
    loading: false,
    error: false,
    hotelSingle: null,
  },
  reducers: {
    axiosSuccess: (state, action) => {
      state.HotelsArray = action.payload;
      state.loading = false;
      state.error = false;
    },
    axiosSuccessHS: (state, action) => {
      state.hotelSingle = action.payload;
      state.loading = false;
      state.error = false;
    },
    axiosLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    axiosError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchData = (searchParams = { city: "All" }) => {
  return async (dispatch) => {
    dispatch({ type: axiosLoading });
    try {
      await axios.get("/DB/HotelDataBase.json").then((response) => {
        if (parseInt(searchParams.hid)!== 0) {
          const [currentHotel] = response.data.filter(
            (hotel) => hotel.HotelId === parseInt(searchParams.hid)
          );
          dispatch({ type: axiosSuccessHS, payload: currentHotel });
        }

        if (searchParams.city === "All") {
          dispatch({ type: axiosSuccess, payload: response.data });
        } else {
          dispatch({
            type: axiosSuccess,
            payload: response.data.filter((hotel) => {
              return (
                hotel.loc_City
                  .split(" ")
                  .join("_")
                  .toLocaleLowerCase()
                  .includes(searchParams.city) ||
                hotel.loc_State
                  .split(" ")
                  .join("_")
                  .toLocaleLowerCase()
                  .includes(searchParams.city) ||
                hotel.loc_Country
                  .split(" ")
                  .join("_")
                  .toLocaleLowerCase()
                  .includes(searchParams.city)
              );
            }),
          });
        }
      });
    } catch (error) {
      dispatch({ type: axiosError, payload: error.message });
    }
  };
};

export const { axiosSuccess, axiosSuccessHS, axiosLoading, axiosError } =
  fetchDataSlice.actions;

export default fetchDataSlice.reducer;
