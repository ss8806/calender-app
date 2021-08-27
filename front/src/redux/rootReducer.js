import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";

// combineReducersの引数は、{[state名]: [reducer]}という感じで対応付けしています。
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
});
export default rootReducer;
