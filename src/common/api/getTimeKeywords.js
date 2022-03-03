import dayjs from 'dayjs';

const timeZone = {
  morning: `morning,아침,모닝`,
  noon: `noon,정오,점심`,
  afternoon: `afternoon,오후`,
  dinner: `dinner,저녁,개와늑대의시간,퇴근`,
  night: `night,밤`,
  dawn: `dawn,새벽,깊은밤,깊은새벽`,
};

export default function getTimeKeywords() {
  const now = dayjs().get('hour');
  let zoneKeyword;

  if (now >= 6 && now < 11) zoneKeyword = timeZone.morning;
  if (now >= 11 && now < 14) zoneKeyword = timeZone.noon;
  if (now >= 14 && now < 18) zoneKeyword = timeZone.afternoon;
  if (now >= 18 && now < 21) zoneKeyword = timeZone.dinner;
  if (now >= 21 && now <= 24) zoneKeyword = timeZone.night;
  if (now >= 0 && now < 6) zoneKeyword = timeZone.dawn;

  return zoneKeyword;
}
