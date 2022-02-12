import { createActions } from "redux-actions";

import { ActionTypes } from "./types";

export const {
  selectCitiWeather,
  fetchCurrentWeather,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherError,
} = createActions({
  [ActionTypes.SELECT_CITI_WEATHER]: (payload: any) => payload,
  [ActionTypes.FETCH_CURRENT_WEATHER]: (payload: any) => payload,
  [ActionTypes.FETCH_CURRENT_WEATHER_SUCCESS]: (payload: any) => payload,
  [ActionTypes.FETCH_CURRENT_WEATHER_ERROR]: (payload: any) => payload,
});
