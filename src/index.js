import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducers";
import sagas from "./Sagas/rootSaga";

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
