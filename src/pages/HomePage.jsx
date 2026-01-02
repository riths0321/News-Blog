import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CategoryTabs from "../components/CategoryTabs";
import { Clock, ArrowUpRight, Inbox } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = ({ articles = [] }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("For you");
  const [filteredArticles, setFilteredArticles] = useState([]);

  const normalize = (value = "") => value.toString().trim().toLowerCase();

  useEffect(() => {
    if (!articles.length) {
      setFilteredArticles([]);
      return;
    }

    if (normalize(activeCategory) === "for you") {
      setFilteredArticles(articles);
    } else {
      const selected = normalize(activeCategory);
      const filtered = articles.filter(
        (article) => normalize(article.category) === selected
      );
      setFilteredArticles(filtered);
    }
  }, [activeCategory, articles]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Main Banner */}
      <HeroSection />

      {/* Category Tabs - Sticky Filter */}
      <div className="sticky top-[64px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
            {activeCategory} <span className="text-indigo-600">Stories</span>
          </h2>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
            {filteredArticles.length} Articles Found
          </span>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="col-span-full py-20 flex flex-col items-center justify-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200"
              >
                <Inbox size={48} className="text-slate-300 mb-4" />
                <p className="text-slate-500 font-bold tracking-tight">No articles available in this category.</p>
              </motion.div>
            ) : (
              filteredArticles.map((article, index) => (
                <motion.div
                  layout
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div 
                    onClick={() => navigate(`/article/${article.id}`)}
                    className="group h-full bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-glass hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                        {article.subtitle || article.content?.slice(0, 120) + "..."}
                      </p>

                      {/* Footer */}
                      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={article.author.avatar} 
                            className="w-8 h-8 rounded-full border border-slate-100 object-cover" 
                            alt={article.author.name} 
                          />
                          <div>
                            <p className="text-[11px] font-black text-slate-900 leading-none mb-1">
                              {article.author.name}
                            </p>
                            <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-tighter">
                              <Clock size={10} /> {article.readTime} min read
                            </p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default HomePage;