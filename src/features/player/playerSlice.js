import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  target: null,
  urls: null,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playerChanged: (state, action) => {
      state.target = action.payload.target;
      state.urls = action.payload.urls;
    },
  },
});

export const { playerChanged } = playerSlice.actions;

export default playerSlice.reducer;
