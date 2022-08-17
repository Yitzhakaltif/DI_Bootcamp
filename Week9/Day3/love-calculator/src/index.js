import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk)); // We import all redux items make sure to add reducer

ReactDOM.render(
  // We must add Prover and give it attribute store that is equal to const store CreateStore
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();