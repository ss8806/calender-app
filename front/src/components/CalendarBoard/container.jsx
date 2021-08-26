import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

const mapStateToProps = (state) => ({ calendar: state.calendar });

// mergePropsはmapStateToPropsの結果が前回と異なっていたときにだけ実行されます。
const mergeProps = (stateProps) => ({
  calendar: createCalendar(stateProps.calendar),
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
