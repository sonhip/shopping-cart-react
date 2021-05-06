import { combineReducers } from "redux";
import productsReducer from "../pages/home/reducers/products_reducer";
import cartReducer from "../pages/cart/reducers/cart-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { connectRouter } from "connected-react-router";
import loginReducer from "pages/login/reducers/login-reducer";

const persistConfigCart = {
  key: "cart-persist",
  storage,
  whitelist: ["cartItems", "sumMoney", "countItems"],
};

const rootReducer = (history) =>
  combineReducers({
    productsReducer,
    cartReducer: persistReducer(persistConfigCart, cartReducer),
    router: connectRouter(history),
    login: loginReducer,
  });
export default rootReducer;
