import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import { setSchedules } from "../../services/schedule";
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog,
} from "../../redux/currentSchedule/actions";

const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules,
}); // .calendarはschedulesはrootReducerから

const mapDispatchToProps = (dispatch) => ({
  // dispatchを定義
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
  openCurrentScheduleDialog: (schedule, e) => {
    // 他のイベントが発火するのをキャンセル
    e.stopPropagation();

    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  },
});

// mergePropsはmapStateToPropsの結果が前回と異なっていたときにだけ実行されます。
// stateProps は mapStateToPropsで生成されたprops と mapDisapatchToPropsで生成されたprops のこと

const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules },
  } = stateProps;

  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
