import React, { useEffect } from 'react';
import { WiThermometer } from 'react-icons/wi';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getMyLngLat, makePosionToLngLat } from '../../common/api/getMyGeo';
import getWeather from '../../common/api/getWeather';
import { currentLocationUpdated, currentWeatherUpdated } from './weatherSlice';

export default function Weather() {
  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state.weather.currentLocation);
  const currentWeather = useSelector((state) => state.weather.currentWeather);

  async function checkMyLngLat() {
    const position = await getMyLngLat();
    const location = makePosionToLngLat(position);
    dispatch(currentLocationUpdated(location));
  }

  useEffect(() => {
    checkMyLngLat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function checkMyWeather(location) {
      const weatherInfo = await getWeather(location);
      dispatch(currentWeatherUpdated(weatherInfo.data));
    }

    if (currentLocation) {
      checkMyWeather(currentLocation);

      setInterval(() => {
        checkMyLngLat().then(() => checkMyWeather(currentLocation));
      }, 1000 * 60 * 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation, dispatch]);

  return (
    <StyledWeather>
      {currentWeather && <WiThermometer size={24} />}
      {currentWeather && `${Math.round(currentWeather.main.temp)}℃`}
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
