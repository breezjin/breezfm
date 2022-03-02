import { configureStore } from '@reduxjs/toolkit';

import bgReducer from '../features/background/bgSlice';
import weatherReducer from '../features/header/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    bg: bgReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
