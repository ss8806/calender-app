import Navigation from "./presentation";

import { connect } from "react-redux";

import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch) => ({
  // 下記のmergePropsのメソッドから
  setMonth: (month) => {
    // reducer から return payload
    dispatch(calendarSetMonth(month));
  },
});

// mergePropsでmapStateToPropsとmapDispatchToPropsの結果を使ってごにょごにょしています。
const mergeProps = (stateProps, dispatchProps) => ({
  // getMonth で今日の ymd が返る
  // mergePropsでmonthという state に redux の state からdayjsに変換して props として提供してやります。
  // reduxのstate → dayjs
  month: getMonth(stateProps.calendar),

  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: (dayObj) => {
    // 変更が会った時はdayjsインスタンスが帰ってくるので redux の state に変換してから dispatch するようにします。
    // dayjs → reduxのstate
    const month = formatMonth(dayObj); // ymd
    dispatchProps.setMonth(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
