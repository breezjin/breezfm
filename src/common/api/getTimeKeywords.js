import dayjs from 'dayjs';

const seasonsKR = {
  spring: `봄`,
  summer: `여름`,
  autumn: `가을`,
  winter: `겨울`,
};

const daysKR = {
  mon: `월요일`,
  tue: `화요일`,
  wed: `수요일`,
  thu: `목요일`,
  fri: `금요일`,
  sat: `토요일,주말`,
  sun: `일요일,주말`,
};

const hoursKR = {
  morning: `아침`,
  noon: `정오`,
  afternoon: `오후`,
  dinner: `저녁`,
  night: `밤`,
  dawn: `새벽`,
};

const seasonsEN = {
  spring: `spring`,
  summer: `summer`,
  autumn: `autumn`,
  winter: `winter`,
};

const daysEN = {
  mon: `monday`,
  tue: `tuesday`,
  wed: `wednesday`,
  thu: `thursday`,
  fri: `friday`,
  sat: `saturday,weekend`,
  sun: `sunday,weekend`,
};

const hoursEN = {
  morning: `morning`,
  noon: `noon`,
  afternoon: `afternoon`,
  dinner: `dinner`,
  night: `night`,
  dawn: `dawn`,
};

export default function getTimeKeywords() {
  const month = dayjs().get('month');
  const day = dayjs().get('day');
  const hour = dayjs().get('hour');

  let monthKeywordKR;
  let dayKeywordKR;
  let hourKeywordKR;

  if (month >= 0 && month < 2) monthKeywordKR = seasonsKR.winter;
  if (month >= 2 && month < 5) monthKeywordKR = seasonsKR.spring;
  if (month >= 5 && month < 8) monthKeywordKR = seasonsKR.summer;
  if (month >= 8 && month < 10) monthKeywordKR = seasonsKR.autumn;
  if (month >= 10 && month <= 11) monthKeywordKR = seasonsKR.winter;

  if (day === 0) dayKeywordKR = daysKR.sun;
  if (day === 1) dayKeywordKR = daysKR.mon;
  if (day === 2) dayKeywordKR = daysKR.tue;
  if (day === 3) dayKeywordKR = daysKR.wed;
  if (day === 4) dayKeywordKR = daysKR.thu;
  if (day === 5) dayKeywordKR = daysKR.fri;
  if (day === 6) dayKeywordKR = daysKR.sat;

  if (hour >= 6 && hour < 11) hourKeywordKR = hoursKR.morning;
  if (hour >= 11 && hour < 14) hourKeywordKR = hoursKR.noon;
  if (hour >= 14 && hour < 18) hourKeywordKR = hoursKR.afternoon;
  if (hour >= 18 && hour < 21) hourKeywordKR = hoursKR.dinner;
  if (hour >= 21 && hour <= 24) hourKeywordKR = hoursKR.night;
  if (hour >= 0 && hour < 6) hourKeywordKR = hoursKR.dawn;

  let monthKeywordEN;
  let dayKeywordEN;
  let hourKeywordEN;

  if (month >= 0 && month < 2) monthKeywordEN = seasonsEN.winter;
  if (month >= 2 && month < 5) monthKeywordEN = seasonsEN.spring;
  if (month >= 5 && month < 8) monthKeywordEN = seasonsEN.summer;
  if (month >= 8 && month < 10) monthKeywordEN = seasonsEN.autumn;
  if (month >= 10 && month <= 11) monthKeywordEN = seasonsEN.winter;

  if (day === 0) dayKeywordEN = daysEN.sun;
  if (day === 1) dayKeywordEN = daysEN.mon;
  if (day === 2) dayKeywordEN = daysEN.tue;
  if (day === 3) dayKeywordEN = daysEN.wed;
  if (day === 4) dayKeywordEN = daysEN.thu;
  if (day === 5) dayKeywordEN = daysEN.fri;
  if (day === 6) dayKeywordEN = daysEN.sat;

  if (hour >= 6 && hour < 11) hourKeywordEN = hoursEN.morning;
  if (hour >= 11 && hour < 14) hourKeywordEN = hoursEN.noon;
  if (hour >= 14 && hour < 18) hourKeywordEN = hoursEN.afternoon;
  if (hour >= 18 && hour < 21) hourKeywordEN = hoursEN.dinner;
  if (hour >= 21 && hour <= 24) hourKeywordEN = hoursEN.night;
  if (hour >= 0 && hour < 6) hourKeywordEN = hoursEN.dawn;

  const keyword = {
    KR: `${hourKeywordKR},${dayKeywordKR},${monthKeywordKR}`,
    EN: `${hourKeywordEN},${dayKeywordEN},${monthKeywordEN}`,
  };

  return keyword;
}
