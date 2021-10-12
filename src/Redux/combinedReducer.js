import counter from "./counterReducer";
import isLoggedIn from "./isLogged";
import { combineReducers } from "redux";
const allReducers = combineReducers({ counter, isLoggedIn });
export default allReducers;
