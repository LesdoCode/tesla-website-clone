import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/car-slice';


export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
