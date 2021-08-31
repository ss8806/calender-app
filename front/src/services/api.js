const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;
const header = {
  // 、json で送っているということをサーバーに通知する必要があるので、HTTP のヘッダーにContent-Type: application/jsonを指定
  headers: {
    "Content-Type": "application/json",
  },
};

export const get = async (path) => {
  // fetch(url(path))はResponse型のデータのPromiseを返して、
  // そのrespは様々な通信に関する情報をもっているので、その中身の json データだけをパースして取得しています。
  const resp = await fetch(url(path));
  const result = await resp.json();

  return result;
};

export const post = async (path, body) => {
  // 送りたいデータを受け取ってそれを json に変換しています。
  const options = { ...header, method: "POST", body: JSON.stringify(body) };
  // 第二引数はリクエストするメソッド。 デフォルトは GET。 ここではpost
  const resp = await fetch(url(path), options);

  const result = await resp.json();

  return result;
};

export const deleteRequest = async (path) => {
  const options = { method: "DELETE" };

  await fetch(url(path), options);

  // 204 No Contentが返ってくるので成功の場合は何もreturnしない
  return;
};
