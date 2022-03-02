import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  currentImgs: [],
};

export const bgSlice = createSlice({
  name: 'bg',
  initialState,
  reducers: {
    currentImgsUpdated: (state, action) => {
      state.currentImgs.push(action.payload);
    },
  },
});

export const { currentImgsUpdated } = bgSlice.actions;

export default bgSlice.reducer;
