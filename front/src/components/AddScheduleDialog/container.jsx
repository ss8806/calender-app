import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";

const mapStateToProps = (state) => ({ schedule: state.addSchedule }); // addSchedule はrootReducereから

const mapDispatchToProps = (dispatch) => ({
  // closeDialog を定義
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  // setSchedule を定義
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
