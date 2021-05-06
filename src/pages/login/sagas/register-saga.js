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
    content: "Register Successfully!",
    className: "w-3/4 mt-16 md:text-xl",
  });
};
const failed = () => {
  message.success({
    content: "Register Failed!",
    className: "w-3/4 mt-16 md:text-xl",
  });
};
function* registerSaga({ user, email, pass, phone }) {
  try {
    yield put(actions.startRegister(true));
    const data = yield call(api.registerRequest, user, email, pass, phone);
    if (!isEmptyObject(data)) {
      yield put(actions.registerSuccess(data));
      yield put(push("/"));
      yield put(success());
    } else {
      yield put(
        actions.registerFailed({
          code: 444,
          message: "REGISTER FAILED",
        })
      );
      yield put(failed());
    }
    yield put(actions.stopRegister(false));
  } catch (error) {
    yield put(actions.registerFailed(error));
    yield put(actions.stopRegister(false));
  }
}

export default function* watchRegisterSaga() {
  yield takeLatest(types.REGISTER_REQUEST, registerSaga);
}
