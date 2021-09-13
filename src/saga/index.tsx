import { all } from "redux-saga/effects";
// import {watcherGetPermitSaga, watcherPermitSaga} from "./handlers/fetchPermits";
import root from "./handlers/fetchPermits";

export default function* rootSaga() {
  yield all([root()]);
}
