import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/loading/loading";
import { Provider } from "react-redux";
import configStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configStore({});
const HomePage = lazy(() => import("./pages/home/index"));
const CartPage = lazy(() => import("./pages/cart/index"));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Router>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/home">
                <HomePage />
              </Route>
              <Route exact path="/cart">
                <CartPage />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
