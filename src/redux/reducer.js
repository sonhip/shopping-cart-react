import { combineReducers } from "redux";
import productsReducer from "../pages/home/reducers/products_reducer";
import cartReducer from "../pages/cart/reducers/cart-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfigCart = {
  key: "cart-persist",
  storage,
  whitelist: ["sumMoney", "countItems", "cartItems"],
};

const rootReducer = combineReducers({
  productsReducer,
  cartReducer: persistReducer(persistConfigCart, cartReducer),
});
export default rootReducer;
