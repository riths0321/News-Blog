import React, { useRef } from "react";
import { motion } from "framer-motion";

export const categories = [
  "For you", "India", "World", "Politics", "Economy", 
  "Finance", "Stock Market", "Technology", "Business", 
  "Programming", "Productivity", "Engineering", "Startups"
];

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  const scrollRef = useRef(null);

  return (
    <div className="sticky top-[64px] md:top-[72px] z-40 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4">
        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3 scroll-smooth"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 text-sm font-bold whitespace-nowrap transition-all duration-300 rounded-full
                  ${isActive 
                    ? "text-indigo-600" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
              >
                {/* Text */}
                <span className="relative z-10">{category}</span>

                {/* Animated Background Pill for Active State */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-50 rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Animated Underline */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-indigo-600 rounded-full z-20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtle Gradient Overlays for horizontal scroll indication */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none md:hidden" />
    </div>
  );
};

export default CategoryTabs;