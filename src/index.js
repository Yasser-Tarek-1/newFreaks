import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ReactComponent as Loading } from "./assets/loading.svg";
import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div className="h-screen bg-yellow flex items-center justify-center">
          <Loading className="w-32 h-auto" />
        </div>
      }
    >
      <App tab="home" />
    </Suspense>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
