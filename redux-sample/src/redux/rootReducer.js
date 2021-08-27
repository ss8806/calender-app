import { combineReducers } from "redux";
import { count } from "./count/reducer";
// combineReducersという関数を使い、reducer を一つにまとめます。
const rootReducer = combineReducers({ count });

export default rootReducer;
