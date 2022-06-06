import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FetchProvider from "./Context/FetchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FetchProvider>
      <App />
    </FetchProvider>
  </React.StrictMode>
);
