import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  target: null,
  urls: null,
  breezSongInfo: null,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playerChanged: (state, action) => {
      state.target = action.payload.target;
      state.urls = action.payload.urls;
    },
    breezSongInfoChanged: (state, action) => {
      state.breezSongInfo = action.payload;
    },
  },
});

export const { playerChanged, breezSongInfoChanged } = playerSlice.actions;

export default playerSlice.reducer;
