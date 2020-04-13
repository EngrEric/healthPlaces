import { all } from "redux-saga/effects";
import home from "../src/home";

export function* mainSaga() {
  yield all([home.homeSaga()]);
}
