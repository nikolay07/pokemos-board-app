import React from "react";
import { render } from "react-dom";
import App from "./App1";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store";

const root = document.querySelector("#root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
