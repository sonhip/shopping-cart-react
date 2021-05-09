import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as types from "../actions/type";
import * as api from "services/login";
import { isEmptyObject } from "helper/common";
import { message } from "antd";

const success = () => {
  message.success({
    content: "Logout Successfully!",
    className: "w-3/4 mt-16 md:text-xl",
  });
};
const failed = () => {
  message.warn({
    content: "Logout Failed!",
    className: "w-3/4 mt-16 md:text-xl",
  });
};
function* logoutSaga() {
  try {
    yield put(actions.startLogout(true));
    const data = yield call(api.LogoutRequest);
    console.log(data);
    if (!isEmptyObject(data)) {
      yield put(actions.logoutSuccess());
      yield put(success());
    } else {
      yield put(
        actions.logoutFailed({
          code: 444,
          message: "LOGOUT FAILED",
        })
      );
      yield put(failed());
    }
    yield put(actions.stopLogout(false));
  } catch (error) {
    yield put(actions.logoutFailed(error));
    yield put(actions.stopLogout(false));
  }
}

export default function* watchLogoutSaga() {
  yield takeLatest(types.LOGOUT_REQUEST, logoutSaga);
}
