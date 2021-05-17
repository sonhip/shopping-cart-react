import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions/index";
import { SEARCHING_DATA } from "../actions/types";
import { searchByName } from "services/api";

function* searchDataSaga({ keyword }) {
  try {
    yield put(actions.startSearchingData(true));
    const data = yield call(searchByName, keyword);
    yield put(actions.searchingDataSuccess(data));
    yield put(actions.stopSearchingData(false));
  } catch (error) {
    yield put(actions.searchingDataFailed(error));
    yield put(actions.stopSearchingData(false));
    yield console.log(error);
  }
}

export default function* watchSearchingDataSaga() {
  yield takeLatest(SEARCHING_DATA, searchDataSaga);
}
