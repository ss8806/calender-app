const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;

export const get = async (path) => {
  // fetch(url(path))はResponse型のデータのPromiseを返して、
  // そのrespは様々な通信に関する情報をもっているので、その中身の json データだけをパースして取得しています。
  const resp = await fetch(url(path));
  const result = await resp.json();

  return result;
};
