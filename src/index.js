// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import App from "./App";
import userReducer from "./components/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
