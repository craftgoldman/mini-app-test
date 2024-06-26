import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import WebApp from "@twa-dev/sdk";

WebApp.ready();
//WebApp.MainButton.setText("Start");
//WebApp.MainButton.show();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
