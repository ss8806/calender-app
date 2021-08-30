import { isSameDay } from "./calendar";
// calendar, schedules はreduxのstate
export const setSchedules = (calendar, schedules) =>
  calendar.map((c) => ({
    // calendarをmapしてdateにセット
    date: c,
    // schedulesのdateと、mapされたそれぞれのcalendarの日付に一致するものだけをfilterしてセット
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));
