import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./utils/Appstore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);

reportWebVitals();
