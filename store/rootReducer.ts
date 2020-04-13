import { combineReducers } from "redux";
import home from "../src/homeScreen";

export const mainReducer = combineReducers({
  home: home.homeReduer,
});
