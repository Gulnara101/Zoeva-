import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainProvider from "./Context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainProvider> 
      <App />
    </MainProvider>
  </BrowserRouter>
);
