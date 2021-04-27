import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./utils/loadable/index";
import { Provider } from "react-redux";
import configStore from "./redux/store";

const { store } = configStore({});
const HomePage = lazy(() => import("./pages/home/index"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
