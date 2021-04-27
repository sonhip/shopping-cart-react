import { combineReducers } from "redux";
import productsReducer from "../pages/home/reducers/products_reducer";

const rootReducer = combineReducers({
  productsReducer,
});
export default rootReducer;
