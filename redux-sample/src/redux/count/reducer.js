import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;
// 第２引数は分割代入
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
