import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
} from "./actions";
import { get, post } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem =
  ({ month, year }) =>
  async (dispatch) => {
    dispatch(schedulesSetLoading());

    const result = await get(`schedules?month=${month}&year=${year}`);

    const formatedSchedule = result.map((r) => formatSchedule(r));

    dispatch(schedulesFetchItem(formatedSchedule));
  };

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
  // loading: true にする
  dispatch(schedulesSetLoading());

  const body = { ...schedule, date: schedule.date.toISOString() };
  // post() はapi.js で作成
  const result = await post("schedules", body);

  const newSchedule = formatSchedule(result);
  dispatch(schedulesAddItem(newSchedule));
};
