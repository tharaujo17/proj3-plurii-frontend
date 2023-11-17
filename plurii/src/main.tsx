import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import GlobalStyle from "./styles/global";
import Header from "./organisms/Header";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
