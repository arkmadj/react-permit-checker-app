import "./App.css";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Permit from "./pages/permit/Permit";

const sagaMiddleware = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
  rootReducer
);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          {/* <Dashboard /> */}
          <Switch>
            <Route exact path="/">
              <Dashboard/>
            </Route>
            <Route path="/permit/:id">
              <Permit/>
            </Route>
          </Switch>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
