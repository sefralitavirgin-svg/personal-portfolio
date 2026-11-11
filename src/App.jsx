import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

import ScrollToTop from "./components/ScrollToTop";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>

          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;