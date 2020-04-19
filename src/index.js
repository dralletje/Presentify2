import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Workspace from "./Workspace";
import { PresentifyProvider } from "./PresentifyContext";

ReactDOM.render(
  <div style={{ height: "100vh", width: "100vw" }}>
    <PresentifyProvider>
      <Workspace />
    </PresentifyProvider>
  </div>,
  document.getElementById("root")
);
