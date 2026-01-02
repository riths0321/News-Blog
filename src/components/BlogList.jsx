import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, User, Heart, MessageCircle, ArrowUpRight } from "lucide-react";

const BlogList = ({ articles = [] }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Grid Container */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-premium hover:shadow-glass transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Section */}
            <Link to={`/articles/${article.id}`} className="relative h-60 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Floating Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-indigo-600 uppercase tracking-widest shadow-sm">
                  {article.category}
                </span>
              </div>
              
              {/* Glassy Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight className="text-indigo-600" size={24} />
                </div>
              </div>
            </Link>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
                  {article.author?.avatar ? (
                    <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={14} className="text-slate-400" />
                  )}
                </div>
                <span className="text-xs font-bold text-slate-500">
                  {typeof article.author === 'object' ? article.author.name : article.author}
                </span>
              </div>

              <Link to={`/articles/${article.id}`}>
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </Link>

              <p className="text-slate-500 text-sm line-clamp-2 mb-6 font-medium">
                {article.excerpt || article.subtitle}
              </p>

              {/* Footer Meta */}
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                  {article.views && (
                    <div className="flex items-center gap-1.5 text-[11px] font-bold">
                      <Heart size={14} className="group-hover:text-red-500 transition-colors" />
                      {article.views}
                    </div>
                  )}
                </div>
                
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  {article.date || article.publishedDate}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;