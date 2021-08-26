import { connect } from "react-redux";

import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });

// 上記と同じ意味　const mapStateProps = state => {
//   return { count: state.count };
// };

// 引き数に dispatch を受け取って、必要な action だけを dispatch する関数を定義して props として渡しています。
const mapDispatchProps = (dispatch) => ({
  increment: (count) => {
    dispatch(increment(count));
  },
  decrement: (count) => {
    dispatch(decrement(count));
  },
});

export default connect(mapStateProps, mapDispatchProps)(Counter);
