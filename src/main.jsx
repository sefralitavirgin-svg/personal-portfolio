import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <ThemeProvider>

      <LanguageProvider>

        <App />

      </LanguageProvider>

    </ThemeProvider>

  </StrictMode>
);