import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bolt, TrendingUp, ArrowRight, Play, Sparkles } from "lucide-react";
import { posts } from "../data/mockData"; // Aapka actual data
import TrendingData from "./TrendingData";

const HeroSection = () => {
  const navigate = useNavigate();

        const handleStartReading = () => {
          if (!posts || posts.length === 0) return;
          
          // Random post select karein
          const randomPost = posts[Math.floor(Math.random() * posts.length)];
          
          // Is line ko fix karein (articles -> article)
          navigate(`/article/${randomPost.id}`); 
        };
  return (
    <div className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-48 md:pb-24">
      {/* --- Abstract Background Decor --- */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* --- TOP BADGES --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-full">
              <Bolt size={14} className="text-amber-600 fill-amber-600" />
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-700">Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
              <Sparkles size={14} className="text-indigo-600" />
              <span className="text-[11px] font-black uppercase tracking-widest text-indigo-700">Trending Now</span>
            </div>
          </motion.div>

          {/* --- MAIN HEADING --- */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-slate-950 leading-[1.05] tracking-tight mb-8"
          >
            News that <span className="text-indigo-600 italic font-light">matters.</span><br />
            Stories that explain.
          </motion.h1>

          {/* --- SUBHEADING --- */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-12"
          >
            Deep dive into technology, business, and world affairs. 
            We bypass the noise to bring you clarity through verified journalism.
          </motion.p>

          {/* --- CALL TO ACTIONS --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={handleStartReading}
              className="group bg-slate-950 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-all duration-300 shadow-2xl shadow-indigo-100 flex items-center gap-3 active:scale-95"
            >
              Start Reading 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
        
          </motion.div>
        </div>

        {/* --- TRENDING BAR (Integrated) --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 border-y border-slate-100 py-8 bg-slate-50/50 -mx-6 px-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp size={20} className="text-indigo-600" />
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Trending Discussions</h2>
          </div>
          <TrendingData />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;