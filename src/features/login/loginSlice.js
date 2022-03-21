import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  isLoggedIn: false,
  userId: null,
  userAvatar: null,
  userName: null,
  userEmail: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.userAvatar = action.payload.userAvatar.replace(
        'http://',
        'https://'
      );
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    userUpdated: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.userAvatar = action.payload.userAvatar.replace(
        'http://',
        'https://'
      );
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    userLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.userAvatar = null;
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export async function checkToken(dispatch) {
  const BREEZ_TOKEN = localStorage.getItem('BREEZ_TOKEN');

  try {
    const response = await axios.post(
      '/auth/token-verification',
      {},
      {
        headers: {
          Authorization: `Bearer ${BREEZ_TOKEN}`,
        },
      }
    );

    if (response.data.result === 'verified') {
      dispatch({ type: 'login/userLoggedIn', payload: response.data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'Default Token verification failed! Please re-login!\n',
      'Original Error:\n',
      error.response.data.errMessage
    );

    dispatch({ type: 'login/userLoggedOut' });
  }
}

export const { userLoggedIn, userUpdated, userLoggedOut } = loginSlice.actions;

export default loginSlice.reducer;
