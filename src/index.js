import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainProvider from "./Context/MainContext";
import FormProvider from "./Context/FormContext";
import { Provider } from "react-redux";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </MainProvider>
    </Provider>
  </BrowserRouter>
);
