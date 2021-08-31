import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
  addScheduleStartEdit,
} from "../../redux/addSchedule/actions";
// import { schedulesAddItem } from "../../redux/schedules/actions";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";

const mapStateToProps = (state) => ({ schedule: state.addSchedule }); // addSchedule はrootReducereから

const mapDispatchToProps = (dispatch) => ({
  // setSchedule を定義
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
  // closeDialog を定義
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  saveSchedule: (schedule) => {
    //dispatch(schedulesAddItem(schedule));
    dispatch(asyncSchedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },
  setIsEditStart: () => {
    dispatch(addScheduleStartEdit());
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveSchedule: () => {
    const {
      schedule: { form: schedule },
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
