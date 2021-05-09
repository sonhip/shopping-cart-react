import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/index";
import { ADD_ITEM_TO_CART } from "..//actions/types";
import * as api from "services/api";
import { message } from "antd";

const failed = () => {
  message.warning({
    content: "Add Item Failed!",
    className: "w-3/4 mt-16 md:text-xl",
  });
};
function* addCartSaga({ id }) {
  try {
    yield put(actions.startAddItemToCart(true));
    const res = yield call(api.getDataProductById, id);
    console.log(res);
    if (res) {
      yield put(actions.addItemToCartSuccess(res[0]));
    } else {
      yield put(
        actions.dddItemToCartFailed({
          code: 444,
          message: "not found data",
        })
      );
      failed();
    }
    yield put(actions.stopAddItemToCart(false));
  } catch (error) {
    yield put(actions.dddItemToCartFailed(error));
    yield put(actions.stopAddItemToCart(false));
    failed();
  }
}
export default function* watchAddCartSaga() {
  yield takeLatest(ADD_ITEM_TO_CART, addCartSaga);
}
