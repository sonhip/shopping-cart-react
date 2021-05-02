import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as types from "../actions/types";
import * as api from "../../../services/api";

const isEmptyObject = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

function* getDataSaga() {
  try {
    yield put(actions.startGetData(true));
    const data = yield call(api.getDataProducts);
    if (!isEmptyObject(data)) {
      yield put(actions.getDataSuccess(data));
    } else {
      yield put(
        actions.getDataFailure({
          code: 404,
          message: "not found data!",
        })
      );
    }
    yield put(actions.stopGetData(false));
  } catch (error) {
    yield put(actions.getDataFailure(error));
    yield put(actions.stopGetData(false));
  }
}

export default function* watchSagaGetDaTa() {
  yield takeLatest(types.GET_DATA_PRODUCTS, getDataSaga);
}
