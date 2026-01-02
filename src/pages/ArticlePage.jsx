import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { posts, trendingArticles } from "../data/mockData";
import { motion } from "framer-motion";
import { Clock, User, Share2, Heart, MessageCircle, Bookmark, ArrowLeft } from "lucide-react";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [claps, setClaps] = useState(0);

  useEffect(() => {
    const foundArticle = posts.find((a) => a.id === id);
    if (foundArticle) {
      setArticle(foundArticle);
      setClaps(foundArticle.claps || 0);
    }
    window.scrollTo(0, 0); // Page top par scroll karega change hone pe
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-500 font-bold">
        Article not found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* --- PROGRESS BAR (Optional) --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-100">
        <motion.div className="h-full bg-indigo-600" style={{ scaleX: 0, transformOrigin: "0%" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-32 md:pt-40">
        {/* BACK BUTTON */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest mb-12 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to News
        </Link>

        <article>
          {/* HEADER SECTION */}
          <header className="mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6"
            >
              {article.category}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-bold text-slate-950 leading-[1.1] tracking-tight mb-6"
            >
              {article.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 font-medium leading-relaxed mb-10 border-l-4 border-indigo-100 pl-6"
            >
              {article.subtitle || article.excerpt}
            </motion.p>

            {/* AUTHOR META */}
            <div className="flex items-center gap-4">
              {/* Author Page ka link yahan add kiya */}
              <Link to={`/author/${article.author.id}`} className="group flex items-center gap-4">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name} 
                  className="w-12 h-12 rounded-full border-2 border-slate-50 object-cover group-hover:border-indigo-200 transition-all" 
                />
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1 group-hover:text-indigo-600 transition-colors">
                    {article.author.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-tighter">
                    <span className="flex items-center gap-1"><Clock size={12}/> {article.readTime} min read</span>
                    <span>•</span>
                    <span>{article.publishedDate}</span>
                  </div>
                </div>
              </Link>
            </div>
          </header>

          {/* FEATURED IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
            className="mb-16 rounded-[2.5rem] overflow-hidden shadow-premium"
          >
            <img src={article.image} alt={article.title} className="w-full h-full object-cover max-h-[500px]" />
          </motion.div>

          {/* CONTENT SECTION (Magazine Typography) */}
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-[1.8] prose-p:text-slate-600 prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50/50 prose-blockquote:py-1 prose-blockquote:rounded-r-xl">
             {article.content.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
             ))}
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-slate-100">
            {article.tags?.map(tag => (
              <span key={tag} className="px-5 py-2 rounded-full bg-slate-50 text-slate-500 font-bold text-xs hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>

          {/* INTERACTION BAR */}
          <div className="mt-12 flex items-center gap-8 py-6 border-y border-slate-100">
            <button onClick={() => setClaps(c => c+1)} className="flex items-center gap-2 font-bold text-slate-500 hover:text-rose-500 transition-colors">
              <Heart size={20} className={claps > 0 ? "fill-rose-500 text-rose-500" : ""} /> {claps} Claps
            </button>
            <button className="flex items-center gap-2 font-bold text-slate-500 hover:text-indigo-600 transition-colors">
              <MessageCircle size={20} /> Discussion
            </button>
          </div>
        </article>

        {/* AUTHOR BIO CARD */}
        <section className="mt-20 p-8 md:p-12 bg-slate-50 rounded-[3rem] flex flex-col md:flex-row items-center gap-8">
            <img src={article.author.avatar} alt="" className="w-24 h-24 rounded-full shadow-xl" />
            {/* AUTHOR BIO CARD section mein h3 ko update karein */}
            <div className="text-center md:text-left space-y-3">
              <Link to={`/author/${article.author.id}`}>
                <h3 className="text-2xl font-bold text-slate-900 leading-none hover:text-indigo-600 transition-colors cursor-pointer">
                  About {article.author.name}
                </h3>
              </Link>
              <p className="text-slate-500 font-medium leading-relaxed">{article.author.bio}</p>
              <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-600 transition-all">
                Follow Author
              </button>
            </div>
        </section>
      </div>

      {/* TRENDING / MORE ARTICLES SECTION */}
      <section className="mt-32 bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
             <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-serif italic">More from CheckNews</h2>
             <Link to="/bloglist" className="text-indigo-600 font-black text-xs uppercase tracking-widest hover:underline">View all posts</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingArticles.slice(0, 3).map((trend) => (
              <Link key={trend.id} to={`/article/${trend.id}`} className="group bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm hover:shadow-glass transition-all duration-500">
                <div className="h-48 rounded-[1.5rem] overflow-hidden mb-6">
                  <img src={trend.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug px-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {trend.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;