import { configureStore } from '@reduxjs/toolkit';

import weatherReducer from '../features/header/weatherSlice';
import loginReducer from '../features/login/loginSlice';
import playerReducer from '../features/player/playerSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    login: loginReducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
