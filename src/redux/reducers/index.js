import { combineReducers } from "redux";
import leadsReducer from "./leadsReducer";
const createRootReducer = () =>
  combineReducers({
    leadsReducer,
  });

export default createRootReducer;
