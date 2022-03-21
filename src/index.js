import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './app/App';
import MApp from './app/MApp';
import store from './app/store';
import GlobalStyle from './common/components/GlobalStyle';
import theme from './common/components/ThemeProvider';
import About from './features/about/About';
import Daily from './features/daily/Daily';
import ErrorPage from './features/errorPage/ErrorPage';
import Feel from './features/feel/Feel';
import MFeel from './features/feel/MFeel';
import Login from './features/login/Login';
import { checkToken } from './features/login/loginSlice';
import MProfile from './features/profile/MProfile';
import Profile from './features/profile/Profile';
import Videos from './features/videos/Videos';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL;
store.dispatch(checkToken);

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={isMobile ? <MApp /> : <App />}>
              <Route index element={isMobile ? <MFeel /> : <Feel />} />
              <Route path='about' element={<About />} />
              <Route path='daily' element={<Daily />} />
              <Route path='feel' element={isMobile ? <MFeel /> : <Feel />} />
              <Route path='videos' element={<Videos />} />
              <Route path='error' element={<ErrorPage />} />
              <Route path='login/process' element={<Login />} />
              <Route
                path='user/:userId'
                element={isMobile ? <MProfile /> : <Profile />}
              />
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
