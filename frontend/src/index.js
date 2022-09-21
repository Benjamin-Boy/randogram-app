// Imports React Properties
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Imports React Components
import App from "./App";

// Imports Scss Styles
// import "./scss/style.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
