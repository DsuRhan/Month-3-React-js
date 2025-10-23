import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/*
  🧠 Developer Note:
  - Entry point React dengan Vite + TS.
  - Tidak perlu import React dari "react" karena JSX runtime sudah aktif (react-jsx).
*/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
