import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
  schedulesDeleteItem,
} from "./actions";
import { get, post, deleteRequest } from "../../services/api";
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

export const asyncSchedulesDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  // getState() は thunk の関数の第二引数で store のデータを取得する。今回必要なのは、state.shceduleの中のitemsだったのでこのように取得して
  const currentSchedules = getState().schedules.items;
  // path はschedules/:idだったので、schedules/${id}とテンプレート文字列を使って path を動的に作成しています。
  await deleteRequest(`schedules/${id}`);

  // 成功したらローカルのstateを削除
  const newSchedules = currentSchedules.filter((s) => s.id !== id);
  dispatch(schedulesDeleteItem(newSchedules));
};
