import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  currentLocation: null,
  currentWeather: null,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    currentLocationUpdated: (state, action) => {
      state.currentLocation = action.payload;
    },
    currentWeatherUpdated: (state, action) => {
      state.currentWeather = action.payload;
    },
    currentWeatherRemoved: (state) => {
      state.currentLocation = null;
    },
  },
});

export const {
  currentLocationUpdated,
  currentWeatherUpdated,
  currentWeatherRemoved,
} = weatherSlice.actions;

export default weatherSlice.reducer;
