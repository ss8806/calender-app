import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
  schedulesDeleteItem,
  schedulesAsyncFailure,
} from "./actions";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem =
  ({ month, year }) =>
  async (dispatch) => {
    dispatch(schedulesSetLoading());

    try {
      const result = await get(`schedules`); // テストのためエラーをおこす
      // const result = await get(`schedules?month=${month}&year=${year}`);

      const formatedSchedule = result.map((r) => formatSchedule(r));

      dispatch(schedulesFetchItem(formatedSchedule));
    } catch (err) {
      console.error(err);

      dispatch(schedulesAsyncFailure(err.message));
    }
  };

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
  // loading: true にする
  dispatch(schedulesSetLoading());

  // 非同期処理のエラーを捕捉できるように
  try {
    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
  } catch (err) {
    console.error(err);

    dispatch(schedulesAsyncFailure(err.message));
  }
};

export const asyncSchedulesDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  // getState() は thunk の関数の第二引数で store のデータを取得する。今回必要なのは、state.shceduleの中のitemsだったのでこのように取得して
  const currentSchedules = getState().schedules.items;
  // path はschedules/:idだったので、schedules/${id}とテンプレート文字列を使って path を動的に作成しています。
  try {
    await deleteRequest(`schedules/${id}`);

    // 成功したらローカルのstateを削除
    const newSchedules = currentSchedules.filter((s) => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
  } catch (err) {
    console.error(err);

    dispatch(schedulesAsyncFailure(err.message));
  }
};
