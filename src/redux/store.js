import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const configStore = (loadingSate = {}) => {
  const store = createStore(
    rootReducer,
    loadingSate,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  );
  sagaMiddleware.run(rootSaga);
  return { store };
};
export default configStore;
