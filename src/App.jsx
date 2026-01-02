import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubscribePopup from "./components/SubscribePopup";
import BlogList from "./components/BlogList";

// Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArticlePage from "./pages/ArticlePage";
import AuthorPage from "./pages/AuthorPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

// Data
import { posts } from "./data/mockData";

function App() {
  // ✅ GLOBAL ARTICLES STATE (React 19 treats this state the same, but internally optimized)
  const [articles] = useState(posts);
  return (
    <BrowserRouter>
      {/* Main Wrapper:
          Using Tailwind for the Premium Light Theme.
          'min-h-screen' ensures the page takes full height.
          'flex flex-col' handles the Sticky Footer logic.
      */}
      <div className="min-h-screen bg-white flex flex-col font-sans antialiased selection:bg-indigo-100 selection:text-indigo-700">
        
        {/* Global UI Elements */}
        <Header />
        <SubscribePopup />

        {/* Main Content Area: 
            'flex-grow' pushes the footer to the bottom.
        */}
        <main className="flex-grow">
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
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;