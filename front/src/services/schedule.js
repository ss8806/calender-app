import { isSameDay } from "./calendar";
import dayjs from "dayjs";
// calendar, schedules はreduxのstate
export const setSchedules = (calendar, schedules) =>
  calendar.map((c) => ({
    // calendarをmapしてdateにセット
    date: c,
    // schedulesのdateと、mapされたそれぞれのcalendarの日付に一致するものだけをfilterしてセット
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));

export const formatSchedule = (schedule) => ({
  ...schedule,
  date: dayjs(schedule.date),
});

// scheduleが空でないときにのみ confirm を出したい
export const isCloseDialog = (schedule) => {
  const message = "保存されていない変更を破棄しますか？";
  // isScheduleEmpty(schedule) === trueのときは短絡評価により
  // window.confirm(message)が評価される前にtrueが返されます。
  return isScheduleEmpty(schedule) || window.confirm(message);

  // 上記と同じ意味
  // if (isScheduleEmpty(schedule)) {
  //   return true;
  // } else {
  //   return window.confirm(message);
  // }
};

const isScheduleEmpty = (schedule) =>
  !schedule.title && !schedule.description && !schedule.location;
