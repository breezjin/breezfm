import dayjs from 'dayjs';

const seasons = {
  spring: `spring,봄`,
  summer: `summer,여름`,
  autumn: `autumn,fall,가을`,
  winter: `winter,겨울`,
};

const days = {
  mon: `monday,월요일`,
  tue: `tuesday,화요일`,
  wed: `wednesday,수요일`,
  thu: `thursday,목요일`,
  fri: `friday,금요일`,
  sat: `saturday,토요일`,
  sun: `sunday,일요일`,
};

const hours = {
  morning: `morning,아침,모닝`,
  noon: `noon,정오,점심`,
  afternoon: `afternoon,오후`,
  dinner: `early,night,저녁`,
  night: `night,밤`,
  dawn: `dawn,새벽,깊은밤,깊은새벽`,
};

export default function getTimeKeywords() {
  const month = dayjs().get('month');
  const day = dayjs().get('day');
  const hour = dayjs().get('hour');

  let monthKeyword;
  let dayKeyword;
  let hourKeyword;

  if (month >= 0 && month < 2) monthKeyword = seasons.winter;
  if (month >= 2 && month < 5) monthKeyword = seasons.spring;
  if (month >= 5 && month < 8) monthKeyword = seasons.summer;
  if (month >= 8 && month < 10) monthKeyword = seasons.autumn;
  if (month >= 10 && month <= 11) monthKeyword = seasons.winter;

  if (day === 0) dayKeyword = days.sun;
  if (day === 1) dayKeyword = days.mon;
  if (day === 2) dayKeyword = days.tue;
  if (day === 3) dayKeyword = days.wed;
  if (day === 4) dayKeyword = days.thu;
  if (day === 5) dayKeyword = days.fri;
  if (day === 6) dayKeyword = days.sat;

  if (hour >= 6 && hour < 11) hourKeyword = hours.morning;
  if (hour >= 11 && hour < 14) hourKeyword = hours.noon;
  if (hour >= 14 && hour < 18) hourKeyword = hours.afternoon;
  if (hour >= 18 && hour < 21) hourKeyword = hours.dinner;
  if (hour >= 21 && hour <= 24) hourKeyword = hours.night;
  if (hour >= 0 && hour < 6) hourKeyword = hours.dawn;

  return `${monthKeyword},${dayKeyword},${hourKeyword}`;
}
