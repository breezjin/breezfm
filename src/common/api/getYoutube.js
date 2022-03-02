import axios from 'axios';
import dayjs from 'dayjs';

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const timeZone = {
  morning: `morning,아침,모닝`,
  noon: `noon,정오,점심`,
  afternoon: `afternoon,오후`,
  dinner: `dinner,저녁,개와늑대의시간,퇴근`,
  night: `night,밤`,
  dawn: `dawn,새벽,깊은밤,깊은새벽`,
};

export default async function getYoutube(query) {
  const now = dayjs().get('hour');
  let zone;

  if (now >= 6 && now < 11) zone = timeZone.morning;
  if (now >= 11 && now < 14) zone = timeZone.noon;
  if (now >= 14 && now < 18) zone = timeZone.afternoon;
  if (now >= 18 && now < 21) zone = timeZone.dinner;
  if (now >= 21 && now <= 24) zone = timeZone.night;
  if (now >= 0 && now < 6) zone = timeZone.dawn;

  try {
    const data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_KEY}&part=snippet&q=playlist,${zone},${query}&type=video&videoEmbeddable=true`
    );

    return data;
  } catch (error) {
    return error.message;
  }
}
