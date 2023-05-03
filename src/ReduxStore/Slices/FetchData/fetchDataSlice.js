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
  const DB_URL = process.env.REACT_APP_BACKEND_URL;

  return async (dispatch) => {
    dispatch(axiosLoading());

    try {
      await axios.get(`${DB_URL}/api/hotels`).then((response) => {
        const { data } = response.data;

        if (searchParams.id) {
          const [currentHotel] = data.filter(
            (hotel) => hotel.id === searchParams.id
          );
          dispatch(axiosSuccessHS(currentHotel));
        }
        if (searchParams.city === "All") {
          dispatch(axiosSuccess(data));
        } else {
          dispatch(
            axiosSuccess(
              data.filter((hotel) => {
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
              })
            )
          );
        }
      });
    } catch (error) {
      dispatch(axiosError(error.message));
    }
  };
};

export const { axiosSuccess, axiosSuccessHS, axiosLoading, axiosError } =
  fetchDataSlice.actions;

export default fetchDataSlice.reducer;
