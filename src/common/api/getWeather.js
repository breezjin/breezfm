import axios from 'axios';

const WEATHER_APPKEY = process.env.REACT_APP_OPEN_WEATHER_APPKEY;

export default async function getWeather(location) {
  try {
    const weatherInfo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location[1]}&lon=${location[0]}&lang=kr&units=metric&appid=${WEATHER_APPKEY}`
    );

    return weatherInfo;
  } catch (error) {
    return error.message;
  }
}
