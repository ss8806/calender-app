import dayjs from "dayjs";

// export const createCalendar = () => {
//   // 今月の最初の日を追加
//   const firstDay = dayjs().startOf("month");

//   // 最初の日の曜日のindexを取得
//   const firstDayIndex = firstDay.day();

export const createCalendar = (month) => {
  const firstDay = getMonth(month);
  //  最初の日の曜日のindexを取得
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`); // 今日は 何年 何月何日 を表す
};

export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, "month"); // 次月
  return formatMonth(day);
};

export const getPreviousMonth = (month) => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};
// 上記をさらに抽象化
// getMonthStateCreatorという関数を返す関数（＝高階関数）を実装して、その返り値の関数を実際に使う関数として使っています。

// const getMonthStateCreator = diff => month => {
//   const day = getMonth(month).add(diff, "month");
//   return formatMonth(day);
// };
// export const getNextMonth = getMonthStateCreator(1);
// export const getPreviousMonth = getMonthStateCreator(-1)

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});
