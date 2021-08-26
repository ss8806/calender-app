import React from "react";
import { GridList, Typography } from "@material-ui/core";
import * as styles from "./style.css";
import { createCalendar } from "../../services/calendar";
import CalendarElement from "../CalendarElement";

const calendar = createCalendar();

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = () => {
  console.log(calendar);
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
          <li key={c.toISOString()}>
            {/* <div className={styles.element}>{c.format("D")}</div> */}
            {/* <CalendarElement>{c.format("D")}</CalendarElement> */}
            <CalendarElement day={c} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
