import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from './Slices/FetchData/fetchDataSlice';


export const store = configureStore({
   reducer: {
      fetchData: fetchDataReducer,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})