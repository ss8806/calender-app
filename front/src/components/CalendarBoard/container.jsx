import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";

const mapStateToProps = (state) => ({ calendar: state.calendar }); // .calendarはrootReducerから

const mapDispatchToProps = (dispatch) => ({
  // dispatchを定義
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
});

// mergePropsはmapStateToPropsの結果が前回と異なっていたときにだけ実行されます。
// stateProps は mapStateToPropsで生成されたprops と mapDisapatchToPropsで生成されたprops のこと
const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
