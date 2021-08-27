import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;
//第一引数に直前の state , 第二引数に action を受け取ります。action は分割代入を利用して展開
export const count = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
