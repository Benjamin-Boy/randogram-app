// Imports React Properties
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Imports React Components
import App from "./App";

// Imports Scss Styles
import "./scss/style.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
