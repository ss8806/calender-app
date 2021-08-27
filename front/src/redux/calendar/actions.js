// constants
// type の定数を宣言しています。prefix でCALENDAR_とつけているのは namespace 的な役割で action が多くなってきたときにその action がどの state に関するものかを明確にするためです。
export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

// actions
// action は type や payload を含むオブジェクトを返す関数でしたね。引数はpayloadとなっていますが、
// 中身は state と同じ構造の月と年のオブジェクトを想定しています。
export const calendarSetMonth = (payload) => ({
  type: CALENDAR_SET_MONTH,
  payload,
});
