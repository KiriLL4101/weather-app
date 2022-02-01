/* eslint-disable import/no-anonymous-default-export */
import { handleActions } from "redux-actions";
import { ActionTypes } from "../actions/types";

export interface IWether {
  loading: boolean;
  data: any;
}

export const initialState: IWether = {
  loading: false,
  data: {} as any,
};

export default {
  weather: handleActions(
    {
      [ActionTypes.SET_WEATHER]: (state, action) => {
        return {
          ...state,
          loading: true,
          data: action.payload,
        };
      },
    },
    initialState
  ),
};
