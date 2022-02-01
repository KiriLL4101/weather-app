/* eslint-disable no-bitwise */
import { all, put, call, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/types";
import { setWeather } from "../actions/weather";

const fetchReq = function <T>({
  citi = "Moscow",
}: {
  citi?: string;
}): Promise<T> {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=b88ebedcc6c5fddff5d51268929b66a2`
  ).then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json().then((data) => data as T);
  });
};

export function* requestBody() {
  const data: ReturnType<typeof fetchReq> = yield call(fetchReq, {});
  console.log("data: ", data);
  yield put(setWeather(data));
}

export default function* root() {
  yield all([takeLatest(ActionTypes.ON_LOAD_WEATHER, requestBody)]);
}
