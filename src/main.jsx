import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { JobContextComponent } from "./JobContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobContextComponent>
      <App />
    </JobContextComponent>
  </React.StrictMode>
);
