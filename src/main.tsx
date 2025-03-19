import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
//this is the entry point for the application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* provides necessary routing context for routes  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
