import { Link } from "react-router-dom";
import { trendingArticles } from "../data/mockData";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const TrendingData = () => {
  // Articles split for two-column layout
  const leftArticles = trendingArticles.slice(0, 3);
  const rightArticles = trendingArticles.slice(3, 6);

  const renderArticle = (article, index) => (
    <motion.div
      key={article.id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        // ✅ FIXED: Changed /articles/ to /article/ to match App.jsx
        to={`/article/${article.id}`}
        className="group flex gap-5 py-4 items-start border-b border-slate-100 last:border-0 md:last:border-b"
      >
        {/* PREMIUM INDEX NUMBER */}
        <span className="text-3xl font-black text-slate-200 group-hover:text-indigo-200 transition-colors leading-none tracking-tighter pt-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex flex-col gap-1.5 min-w-0">
          {/* AUTHOR META */}
          <div className="flex items-center gap-2">
            <img 
              src={article.author.avatar} 
              alt={article.author.name} 
              className="w-5 h-5 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-slate-100"
            />
            <span className="text-[10px] font-black text-slate-500 truncate uppercase tracking-widest">
              {article.author.name}
            </span>
          </div>

          {/* ARTICLE TITLE */}
          <h3 className="text-[15px] font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2 font-sans tracking-tight">
            {article.title}
          </h3>

          {/* TIME & DATE */}
          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <Clock size={10} /> {article.readTime} min
            </span>
            <span>•</span>
            <span>{article.publishedDate}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
      <div className="flex flex-col">
        {leftArticles.map((article, i) => renderArticle(article, i))}
      </div>
      <div className="flex flex-col">
        {rightArticles.map((article, i) => renderArticle(article, i + 3))}
      </div>
    </div>
  );
};

export default TrendingData;