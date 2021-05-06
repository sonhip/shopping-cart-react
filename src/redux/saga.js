import { all, call } from "redux-saga/effects";
import watchSagaGetDaTa from "../pages/home/sagas/products-saga";
import watchAddCartSaga from "../pages/cart/sagas/cart-saga";
import watchLoginSaga from "../pages/login/sagas/login-saga";
import watchLogoutSaga from "../pages/login/sagas/logout-saga";
import watchRegisterSaga from "../pages/login/sagas/register-saga";

export default function* rootSaga() {
  yield all([
    call(watchSagaGetDaTa),
    call(watchAddCartSaga),
    call(watchLoginSaga),
    call(watchLogoutSaga),
    call(watchRegisterSaga),
  ]);
}
