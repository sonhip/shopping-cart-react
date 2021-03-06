import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as types from "../actions/type";
import * as api from "services/login";
import { push } from "connected-react-router";
import { isEmptyObject } from "helper/common";
import { message } from "antd";

//customize msg from antd
const success = () => {
  message.success({
    content: "Login Successfully!",
    className: "w-3/4 mt-16 md:text-xl",
  });
};

function* loginSaga({ user, pass }) {
  try {
    yield put(actions.startLogin(true));
    const data = yield call(api.LoginRequest, user, pass);
    if (!isEmptyObject(data)) {
      yield put(actions.loginSuccess(data));
      yield put(push("/checkout"));
      yield put(success());
    } else {
      yield put(
        actions.logoutFailed({
          code: 444,
          message: "LOGIN FAILED",
        })
      );
    }
    yield put(actions.stopLogin(false));
  } catch (error) {
    yield put(actions.loginFailed(error));
    yield put(actions.stopLogin(false));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}
