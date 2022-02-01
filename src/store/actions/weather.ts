import { createActions } from "redux-actions";

import { ActionTypes } from "./types";

export const { onLoadWeather, setWeather } = createActions({
  [ActionTypes.ON_LOAD_WEATHER]: (payload: any) => payload,
  [ActionTypes.SET_WEATHER]: (payload: any) => payload,
});
