import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Home from "./home";
import Conteudo from "./conteudo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Conteudo />
    <Home />
  </StrictMode>
);
