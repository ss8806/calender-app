import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";
import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });
// これは、単に store の現在の状態を引き数として受け取って必要なものだけを props に流しているだけ,
// props は object なので返り値も object です。少しトリッキーな記述だが、以下と同じ意味ある。
// const mapStateProps = state => {
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
//             データを props として渡すのかを定義した関数    適用したいコンポーネント
export default connect(mapStateProps, mapDispatchProps)(Counter);
