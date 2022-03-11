import { configureStore } from '@reduxjs/toolkit';

import bgReducer from '../features/background/bgSlice';
import weatherReducer from '../features/header/weatherSlice';
import loginReducer from '../features/login/loginSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    bg: bgReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
