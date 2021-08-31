import dayjs from "dayjs";
import {
  SCHEDULES_ADD_ITEM,
  SCHEDULES_FETCH_ITEM,
  SCHEDULES_SET_LOADING,
} from "./actions";

const init = {
  items: [],
  isLoading: false,
};

// const init = {
//   items: [
//     {
//       id: 1,
//       title: "テスト",
//       date: dayjs(),
//       location: "会議室",
//       description: "経営戦略について",
//     },
//   ],
//   isLoading: false,
// };

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state, //isLoadingはSCHEDULES_ADD_ITEMのときには無関係なので前回の state と同じものを返します
        // itemsは前回のitemsにpayloadとして渡ってきた新規の予定を追加した配列を返しています。
        // concat()とやっていることは同じですが、スプレッド演算子の方が完結に記述できるのでそれを使ってます。
        // items: [...state.items, { ...payload, id: state.items.length + 1 }],
        isLoading: false,
        items: [...state.items, payload],
      };
    case SCHEDULES_SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SCHEDULES_FETCH_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    default:
      return state;
  }
};

export default schedulesReducer;
