import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import store from "./redux/store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import { combineReducers, createStore, applyMiddleware } from "redux";
import store from "./redux/store";
// import rootReducer from "./redux/reducers/rootReducer";

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
