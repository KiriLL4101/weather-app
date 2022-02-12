/* eslint-disable import/no-anonymous-default-export */
import { handleActions } from "redux-actions";
import { ActionTypes } from "../actions/types";


export interface ICurrentWether {
  loading: boolean;
  weather: IWeather;
}

export const initialState: ICurrentWether = {
  loading: false,
  weather: {} as IWeather,
};

export default {
  currentWeather: handleActions(
    {
      [ActionTypes.FETCH_CURRENT_WEATHER]: (state, action) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.FETCH_CURRENT_WEATHER_SUCCESS]: (state, { payload }) => {
        return {
          ...state,
          loading: false,
          weather: payload as unknown as IWeather, // TODO
        };
      },
      [ActionTypes.FETCH_CURRENT_WEATHER_ERROR]: (state, action) => {
        return {
          ...state,
          loading: false,
        };
      },
    },
    initialState
  ),
};
