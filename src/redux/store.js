import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducer";
import rootSaga from "./saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import history from "./history";
import { routerMiddleware } from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();
const configRootPersist = {
  key: "root-persist-config",
  storage,
  backlist: ["router", "productsReducer", "login"],
};
const rootReducerPersist = persistReducer(
  configRootPersist,
  rootReducer(history)
);

const configStore = (loadingSate = {}) => {
  const store = createStore(
    rootReducerPersist,
    loadingSate,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
    )
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor, history };
};
export default configStore;
