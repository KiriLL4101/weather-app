import { all, fork } from "redux-saga/effects";
import weather from "./weather";

export default function* root(): Generator {
  yield all([fork(weather)]);
}
