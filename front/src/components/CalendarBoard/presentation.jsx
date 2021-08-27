import React from "react";
import { GridList, Typography } from "@material-ui/core";
import * as styles from "./style.css";
import CalendarElement from "../CalendarElement";

//const calendar = createCalendar(); reduxで作成されるので不要

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
  console.log(calendar); // calendarはstate

  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}

        {calendar.map((c) => (
          <li key={c.toISOString()} onClick={() => openAddScheduleDialog()}>
            {/* format("D")というメソッドを使うと指定した表示方式に沿ってフォーマットして表示 */}

            {/* <div className={styles.element}>{c.format("D")}</div> */}
            {/* <CalendarElement>{c.format("D")}</CalendarElement> */}
            {/* <CalendarElement day={c} /> */}
            <CalendarElement day={c} month={month} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
