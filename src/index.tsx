import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import ts from "typescript";

import App from "./App";

import { store } from "./store";

const Global = createGlobalStyle`
* {
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
