import React from "react";
import * as styles from "./style.css";
import dayjs from "dayjs";
import {
  isSameMonth,
  isFirstDay,
  isSameDay,
  getMonth,
} from "../../services/calendar";
import { Typography } from "@material-ui/core";

// CalendarBoard/presentationから dayとmonth が props として渡ってくる
const CalendarElement = ({ day, month }) => {
  // const today = dayjs();
  // const compareFormat = "YYYYMMDD";
  // 当日かどうか判断
  // const isToday = day.format(compareFormat) === today.format(compareFormat);

  // 今月以外をグレーダウン
  // const isCurrentMonth = day.month() === today.month();
  // const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  // 文字列のフォーマットをどうするか
  // const isFirstDay = day.date() === 1;

  // 月の最初だけ月情報をつける
  // const format = isFirstDay ? "M月D日" : "D";

  const today = dayjs();

  const currentMonth = getMonth(month);

  // 今月以外をグレーダウン
  // const isCurrentMonth = isSameMonth(day, today);
  // const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  // 文字列のフォーマットをどうするか
  // 月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうか判断
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        {/* 本日の色を変える処理 */}
        <span className={isToday ? styles.today : ""}>
          {/* {day.format("D")} */}
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
