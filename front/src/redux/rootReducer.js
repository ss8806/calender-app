import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";

// combineReducersの引数は、{[state名]: [reducer]}という感じで対応付けしています。
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  currentSchedule: currentScheduleReducer,
  schedules: schedulesReducer,
});
export default rootReducer;
