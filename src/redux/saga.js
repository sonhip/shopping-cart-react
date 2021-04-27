import { all, call } from "redux-saga/effects";
import watchSagaGetDaTa from "../pages/home/sagas/products-saga";

export default function* rootSaga() {
  yield all([call(watchSagaGetDaTa)]);
}
