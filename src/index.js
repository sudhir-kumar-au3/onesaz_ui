import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
const Routing = () => {
  const doRedirect = () => {
    return <Redirect to="/home/jeemains/allexams"></Redirect>;
  };
  return (
    <BrowserRouter>
      <Route path="/">
        <App />
      </Route>
      {doRedirect()}
    </BrowserRouter>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
