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
const CheckoutPage = lazy(() => import("./pages/checkout/index"));
const DetailPage = lazy(() => import("./pages/detail/detail"));
const SearchPage = lazy(() => import("./pages/search/index"));
const ConfirmOrderPage = lazy(() => import("./pages/confirmOrder/index"));
const AdminPage = lazy(() => import("./pages/admin/index"));

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://shopping-cart-apii.herokuapp.com"
    : "http://localhost:8000";

const App = () => {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://shopping-login-api.herokuapp.com/"
      : "http://localhost:5000";
  useEffect(() => {
    (async function () {
      const response = await axios.get(`${url}/api/auth/user`, {
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
              <Route exact path="/checkout">
                <CheckoutPage />
              </Route>
              <Route exact path="/detail/:slug">
                <DetailPage />
              </Route>
              <Route exact path="/search/:slug">
                <SearchPage />
              </Route>
              <Route exact path="/confirm">
                <ConfirmOrderPage />
              </Route>
              <Route exact path="/admin">
                <AdminPage />
              </Route>
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
