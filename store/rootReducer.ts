import { combineReducers } from "redux";
import home from "../src/home";

export const mainReducer = combineReducers({
  home: home.taskReducer,
  //   registerUser: registerBlitz.reducers,
});
