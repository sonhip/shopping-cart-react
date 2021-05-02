import { all, call } from "redux-saga/effects";
import watchSagaGetDaTa from "../pages/home/sagas/products-saga";
import watchAddCartSaga from "../pages/cart/sagas/cart-saga";

export default function* rootSaga() {
  yield all([call(watchSagaGetDaTa), call(watchAddCartSaga)]);
}
