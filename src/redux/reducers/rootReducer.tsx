import permitReducer from "./permitReducer";
import getPermitReducer from "./getPermitReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  permit: permitReducer,
  getPermit: getPermitReducer
});

export default rootReducer;
