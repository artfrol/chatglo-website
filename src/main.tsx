import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const baseName =
  process.env.NODE_ENV === "development" || window.location.hostname === "chatglo.com"
    ? "/" 
    : "/chatglo-website";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={baseName}>
    <App />
  </BrowserRouter>
);