import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './app/store';
import GlobalStyle from './common/components/GlobalStyle';
import theme from './common/components/ThemeProvider';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
