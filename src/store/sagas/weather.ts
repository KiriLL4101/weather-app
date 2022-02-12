import { all, put, call, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/types";
import { fetchCurrentWeatherSuccess } from "../actions/currentWeather";

const fetchReq = function <T>({
  citi = "moscow",
}: {
  citi?: string;
}): Promise<T> {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${citi}&lang=ru&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
  ).then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json().then((data) => data as T);
  });
};

export function* onLoadWeather() {
  const data: ReturnType<typeof fetchReq> = yield call(fetchReq, {});
  yield put(fetchCurrentWeatherSuccess(data));
}

export function* onLoadSelectedWeather({ payload }: any) {
  const data: ReturnType<typeof fetchReq> = yield call(fetchReq, {
    citi: payload,
  });
  console.log("data : ", data);

  yield put(fetchCurrentWeatherSuccess(data));
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.FETCH_CURRENT_WEATHER, onLoadWeather),
    takeLatest(ActionTypes.SELECT_CITI_WEATHER, onLoadSelectedWeather),
  ]);
}
