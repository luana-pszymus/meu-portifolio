import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import Teste from "./teste.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Teste />
  </StrictMode>
);
