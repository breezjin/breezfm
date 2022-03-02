import axios from 'axios';
import React, { useEffect } from 'react';
import { WiThermometer } from 'react-icons/wi';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getMyLngLat, makePosionToLngLat } from '../../common/api/getMyGeo';
import { currentLocationUpdated, currentWeatherUpdated } from './weatherSlice';

const WEATHER_APPKEY = process.env.REACT_APP_OPEN_WEATHER_APPKEY;

export default function Weather() {
  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state.weather.currentLocation);
  const currentWeather = useSelector((state) => state.weather.currentWeather);

  useEffect(() => {
    async function checkMyLngLat() {
      const position = await getMyLngLat();
      const location = makePosionToLngLat(position);
      dispatch(currentLocationUpdated(location));
    }
    checkMyLngLat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function checkMyWeather(location) {
      const weatherInfo = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${location[1]}&lon=${location[0]}&lang=kr&units=metric&appid=${WEATHER_APPKEY}`
      );
      dispatch(currentWeatherUpdated(weatherInfo.data));
    }

    if (currentLocation) {
      checkMyWeather(currentLocation);
    }
  }, [currentLocation, dispatch]);

  return (
    <StyledWeather>
      {currentWeather && <WiThermometer size={24} />}
      {currentWeather && `${currentWeather.main.temp}℃`}
      {currentWeather && (
        <img
          className='weather-icon'
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt='weather-icon'
        />
      )}
      {currentWeather && `${currentWeather.weather[0].description}`}
    </StyledWeather>
  );
}

const StyledWeather = styled.div`
  font-size: small;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  margin-top: 0.1rem;

  .weather-icon {
    width: 3rem;
  }
`;
