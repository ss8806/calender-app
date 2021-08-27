import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions";
import { formatMonth } from "../../services/calendar";

const day = dayjs();

// formatMonth で定義するため不要
// const init = {
//   year: day.year(),
//   month: day.month() + 1,
// };

const init = formatMonth(day);

const calendarReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calendarReducer;
