import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import { ADD_ITEM_TO_CART } from "..//actions/types";
import * as api from "services/api";

function* addCartSaga({ id }) {
  try {
    yield put(actions.startAddItemToCart(true));
    const res = yield call(api.getDataProductById, id);
    if (res) {
      yield put(actions.addItemToCartSuccess(res));
    } else {
      yield put(
        actions.dddItemToCartFailed({
          code: 444,
          message: "not found data",
        })
      );
    }
    yield put(actions.stopAddItemToCart(false));
  } catch (error) {
    yield put(actions.dddItemToCartFailed(error));
    yield put(actions.stopAddItemToCart(false));
  }
}
export default function* watchAddCartSaga() {
  yield takeLatest(ADD_ITEM_TO_CART, addCartSaga);
}
