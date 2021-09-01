const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;
const header = {
  // 、json で送っているということをサーバーに通知する必要があるので、HTTP のヘッダーにContent-Type: application/jsonを指定
  headers: {
    "Content-Type": "application/json",
  },
};
// path は efects.jsより schedules?month=${month}&year=${year} などがはいる
export const get = async (path) => {
  // fetch(url(path))はResponse型のデータのPromiseを返して、
  // そのrespは様々な通信に関する情報をもっているので、その中身の json データだけをパースして取得しています。
  const resp = await fetch(url(path));

  checkError(resp.status);

  const result = await resp.json();

  return result;
};

export const post = async (path, body) => {
  // 送りたいデータを受け取ってそれを json に変換しています。
  const options = { ...header, method: "POST", body: JSON.stringify(body) };
  // 第二引数はリクエストするメソッド。 デフォルトは GET。 ここではpost
  const resp = await fetch(url(path), options);

  checkError(resp.status);

  const result = await resp.json();

  return result;
};

export const deleteRequest = async (path) => {
  const options = { method: "DELETE" };

  const resp = await fetch(url(path), options);
  checkError(resp.status);

  await fetch(url(path), options);

  // 204 No Contentが返ってくるので成功の場合は何もreturnしない
  return;
};

const checkError = (status) => {
  // 今回は400以上の場合は全部まとめてエラーとして処理
  if (status >= 400) {
    throw new Error("エラーが発生しました。時間を置いて再度お試しください。");
  }
};
