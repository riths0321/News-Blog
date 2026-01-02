import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, BarChart3, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

const AuthorPage = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [authorArticles, setAuthorArticles] = useState([]);
  const [activeTab, setActiveTab] = useState("stories");

  useEffect(() => {
    const articles = posts.filter((a) => a.author.id === id);
    if (articles.length > 0) {
      setAuthor(articles[0].author);
      setAuthorArticles(articles);
    }
  }, [id]);

  if (!author) return <div className="min-h-screen flex items-center justify-center font-bold text-slate-400">Author not found</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* --- AUTHOR HEADER --- */}
      <section className="pt-32 pb-12 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-end">
            {/* Profile Pic */}
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <img 
                src={author.avatar} 
                className="w-32 h-32 rounded-[2.5rem] object-cover border-4 border-white shadow-xl rotate-3" 
                alt={author.name} 
              />
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="space-y-1">
                <motion.h1 
                  initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  className="text-4xl font-serif font-bold text-slate-900 tracking-tight"
                >
                  {author.name}
                </motion.h1>
                <p className="text-slate-500 font-medium leading-relaxed max-w-xl">
                  {author.bio}
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Users size={14} className="text-indigo-600"/> {author.followers.toLocaleString()} Followers</span>
                <span className="flex items-center gap-1.5"><Calendar size={14}/> Joined Jan 2024</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg active:scale-95">
                Follow
              </button>
              <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- STICKY TABS --- */}
      <div className="sticky top-[64px] md:top-[72px] z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-8">
            {["stories", "about"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-xs font-black uppercase tracking-[0.2em] relative transition-colors
                  ${activeTab === tab ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="authorTab" className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- TAB CONTENT --- */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === "stories" ? (
            <motion.div 
              key="stories" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
              className="space-y-12"
            >
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest italic mb-8">
                Recent Contributions ({authorArticles.length})
              </h3>
              
              {authorArticles.map((article) => (
                <Link key={article.id} to={`/article/${article.id}`} className="group block space-y-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-3">
                      <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">{article.category}</span>
                      <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-slate-500 font-medium line-clamp-2 leading-relaxed">
                        {article.subtitle || article.excerpt || "Explore the deep insights and expert analysis from our top contributors."}
                      </p>
                      <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-tighter pt-2">
                        <span>{article.publishedDate}</span>
                        <span>•</span>
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                    {article.image && (
                      <div className="w-full md:w-48 h-32 rounded-3xl overflow-hidden shadow-sm">
                        <img src={article.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="about" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
              className="max-w-2xl space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">Biography</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {author.bio} 
                  <br /><br />
                  With over a decade of experience in digital journalism, {author.name.split(' ')[0]} focuses 
                  on the intersection of technology and human behavior. 
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                <StatCard icon={<BookOpen size={18}/>} label="Total Stories" value={authorArticles.length} />
                <StatCard icon={<Users size={18}/>} label="Followers" value={author.followers.toLocaleString()} />
                <StatCard icon={<BarChart3 size={18}/>} label="Total Reads" value="142K+" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="p-6 bg-slate-50 rounded-[2rem] space-y-2 border border-slate-100">
    <div className="text-indigo-600">{icon}</div>
    <div className="text-2xl font-black text-slate-900 tracking-tighter italic">{value}</div>
    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

export default AuthorPage;