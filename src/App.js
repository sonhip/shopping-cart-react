import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/loading/loading";
import { Provider } from "react-redux";
import configStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import axios from "axios";

const { store, persistor, history } = configStore({});
const HomePage = lazy(() => import("./pages/home/index"));
const CartPage = lazy(() => import("./pages/cart/index"));
const LoginPage = lazy(() =>
  import("./pages/login/components/signin-page/form-login")
);
const SignPage = lazy(() =>
  import("./pages/login/components/signup-page/form-signup")
);

const App = () => {
  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:5000/api/auth/user", {
        withCredentials: true,
      });
      console.log(response);
    })();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ConnectedRouter history={history}>
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
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/register">
                <SignPage />
              </Route>
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
