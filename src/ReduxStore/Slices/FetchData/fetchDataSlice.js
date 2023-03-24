import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataSlice = createSlice({
  name: "fetchDataSlice",
  initialState: {
    HotelsArray: [],
    loading: false,
    error: false,
  },
  reducers: {
    axiosSuccess: (state, action) =>{
      state.HotelsArray = action.payload;
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

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: axiosLoading });
    try {
      await axios.get("/DB/HotelDataBase.json").then((response) => {
        dispatch({ type: axiosSuccess, payload: response.data });
      });
    } catch (error) {
      dispatch({ type: axiosError, payload: error.message });
    }
  };
};

export const { axiosSuccess, axiosLoading, axiosError } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;