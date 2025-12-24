import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SubscribePopup from "./components/SubscribePopup";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogList from "./components/BlogList";
import ArticlePage from "./pages/ArticlePage";
import AuthorPage from "./pages/AuthorPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

import { mockArticles } from "./data/MockData";

/* ================= SEMANTIC DARK THEME ================= */
const colors = {
  bgHeader: "#0f172a",       // solid dark
  bgDrawer: "#020617",       // deeper dark
  bgPrimary: "#0f172a",
  bgSecondary: "#1e293b",
};

function App() {
  // ✅ GLOBAL ARTICLES STATE
  const [articles] = useState(mockArticles);

  return (
    <BrowserRouter>
      {/* 🌙 GLOBAL SEMANTIC DARK BACKGROUND */}
      <Box
        sx={{
          minHeight: "100vh",
          background: `linear-gradient(180deg, ${colors.bgHeader} 0%, ${colors.bgDrawer} 100%)`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <SubscribePopup />
        {/* Main content */}
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage articles={articles} />} />
            <Route path="/bloglist" element={<BlogList articles={articles} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/author/:id" element={<AuthorPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;