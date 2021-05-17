import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { connectRouter } from "connected-react-router";
import productsReducer from "../pages/home/reducers/products_reducer";
import cartReducer from "../pages/cart/reducers/cart-reducer";
import loginReducer from "pages/login/reducers/login-reducer";
import searchingReducer from "pages/search/reducer/searching-reducer";

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
    searchingReducer,
  });
export default rootReducer;
