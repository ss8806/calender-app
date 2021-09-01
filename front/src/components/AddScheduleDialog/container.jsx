import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
  addScheduleStartEdit,
} from "../../redux/addSchedule/actions";
// import { schedulesAddItem } from "../../redux/schedules/actions";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";
import { isCloseDialog } from "../../services/schedule";

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

// const mergeProps = (stateProps, dispatchProps) => ({
//   ...stateProps,
//   ...dispatchProps,
//   saveSchedule: () => {
//     const {
//       schedule: { form: schedule },
//     } = stateProps;
//     dispatchProps.saveSchedule(schedule);
//   },
// });

const mergeProps = (stateProps, dispatchProps) => {
  const {
    schedule: { form: schedule },
  } = stateProps;
  const { saveSchedule, closeDialog } = dispatchProps;
  //一部変数宣言(上記)を return 文の外に出して処理
  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      saveSchedule(schedule);
    },
    // closeDialog()を先ほどのisCloseDialog()でtrueが返ってきたときにのみ dispatch を実行するように変更しました
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
