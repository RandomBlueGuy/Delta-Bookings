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

export const fetchData = (searchParams = null) => {
  return async (dispatch) => {
    dispatch({ type: axiosLoading });
    try {
      await axios.get("/DB/HotelDataBase.json").then((response) => {
        if (searchParams === null) {
          dispatch({ type: axiosSuccess, payload: response.data });
        } else {
          const [currentHotel] = response.data.filter(
            (hotel) => hotel.HotelId === searchParams
          );
          dispatch({ type: axiosSuccessHS, payload: currentHotel });
        }
      });
    } catch (error) {
      dispatch({ type: axiosError, payload: error.message });
    }
  };
};

// export const fetchDataHS = (searchParams = null) => {
//   return async (dispatch) => {
//     dispatch({ type: axiosLoading });
//     try {
//       await axios.get("/DB/HotelDataBase.json").then((response) => {
//         const [currentHotel] = response.data.filter(
//           (hotel) => hotel.HotelId === searchParams
//         );
//         dispatch({ type: axiosSuccessHS, payload: currentHotel });
//       });
//     } catch (error) {
//       dispatch({ type: axiosError, payload: error.message });
//     }
//   };
// };

export const { axiosSuccess, axiosSuccessHS, axiosLoading, axiosError } =
  fetchDataSlice.actions;

export default fetchDataSlice.reducer;
