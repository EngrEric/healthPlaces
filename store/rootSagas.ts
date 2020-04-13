import { all } from "redux-saga/effects";
import home from "../src/homeScreen";

export function* mainSaga() {
  yield all([home.homeSaga()]);
}
