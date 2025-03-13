import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainProvider from "./Context/MainContext";
import { Provider } from "react-redux"; // ✅ ReduxProvider yerine Provider kullan
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>  {/* ✅ ReduxProvider yerine Provider */}
      <MainProvider>
        <App />
      </MainProvider>
    </Provider>
  </BrowserRouter>
);
