import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import {fetchRecentPermits} from "../requests/fetchPermits";
import { fetchPermit } from "../requests/fetchPermits";

export interface Permit {
  id: string;
  permit_: string;
  permit_type: string;
  street_name: string;
  total_fee: number;
  issue_date: Date;
}

export interface ExtendedPermit {
  id: string;
  permit_: string;
  permit_type: string;
  review_type: string;
  application_start_date: Date;
  issue_date: Date;
  processing_time: number;
  street_name: string;
  community_area: number;
  work_description: string;
  building_fee_paid: number;
  building_fee_unpaid: number;
  reported_cost: number;
  total_fee: number;
}

function* handleGetRecentPermits() {
  try {
    const permits: Permit[] = yield call(fetchRecentPermits);
    yield put({ type: "GET_RECENT_PERMITS_SUCCESS", permits });
  } catch (err) {
    yield put({
      type: "GET_RECENT_PERMITS_FAIL",
      message: "Get permit failed",
    });
  }
}

function* handleGetPermit(action:any){
  try{
    const permit: ExtendedPermit = yield call(fetchPermit, action.permit);
    yield put({type: "GET_PERMIT_SUCCESS", permit})
  }catch (err){
    yield put({
      type: "GET_PERMIT_FAIL",
      message: "Failed to fetch permit",
    })
  }
}

function* watcherPermitSaga() {
  yield takeEvery("GET_RECENT_PERMITS", handleGetRecentPermits);
}

function* watcherGetPermitSaga(){
  yield takeEvery("GET_PERMIT", handleGetPermit);
}

export default function* root (){
  yield all([
    fork(watcherGetPermitSaga),
    fork(watcherPermitSaga),
  ])
};

// export default watcherGetPermitSaga;
