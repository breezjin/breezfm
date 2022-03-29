import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './app/App';
import AppM from './app/App-M';
import store from './app/store';
import GlobalStyle from './common/components/GlobalStyle';
import theme from './common/components/ThemeProvider';
import About from './features/about/About';
import AboutM from './features/about/About-M';
import Daily from './features/daily/Daily';
import DailyM from './features/daily/Daily-M';
import ErrorPage from './features/errorPage/ErrorPage';
import Feel from './features/feel/Feel';
import FeelM from './features/feel/Feel-M';
import Login from './features/login/Login';
import { checkToken } from './features/login/loginSlice';
import Profile from './features/profile/Profile';
import ProfileM from './features/profile/Profile-M';
import TermsOfPrivacy from './features/terms/TermsOfPrivacy';
import TermsOfService from './features/terms/TermsOfService';
import Videos from './features/videos/Videos';
import VideosM from './features/videos/Videos-M';
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
            <Route path='/' element={isMobile ? <AppM /> : <App />}>
              <Route index element={isMobile ? <FeelM /> : <Feel />} />
              <Route path='about' element={isMobile ? <AboutM /> : <About />} />
              <Route path='daily' element={isMobile ? <DailyM /> : <Daily />} />
              <Route path='feel' element={isMobile ? <FeelM /> : <Feel />} />
              <Route
                path='videos'
                element={isMobile ? <VideosM /> : <Videos />}
              />
              <Route path='error' element={<ErrorPage />} />
              <Route path='login/process' element={<Login />} />
              <Route path='terms/service' element={<TermsOfService />} />
              <Route path='terms/privacy' element={<TermsOfPrivacy />} />
              <Route
                path='user/:userId'
                element={isMobile ? <ProfileM /> : <Profile />}
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
