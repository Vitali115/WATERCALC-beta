import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
