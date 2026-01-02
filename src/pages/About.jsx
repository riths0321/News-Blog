import React from "react";
import { motion } from "framer-motion";
import { 
  Verified, Globe, Zap, ShieldCheck, 
  Users, TrendingUp, Sparkles, Target 
} from "lucide-react";

const stats = [
  { value: "1M+", label: "Active Readers" },
  { value: "50K+", label: "Articles Published" },
  { value: "100+", label: "News Sources" },
  { value: "24/7", label: "Live Coverage" }
];

const features = [
  {
    icon: <Verified size={28} />,
    title: "Verified Sources",
    description: "Every article is fact-checked and sourced from trusted publications worldwide.",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: <Zap size={28} />,
    title: "Real-Time Updates",
    description: "Get breaking news as it happens with our lightning-fast delivery system.",
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    icon: <Globe size={28} />,
    title: "Global Coverage",
    description: "Comprehensive news from every corner of the world, curated for you.",
    color: "text-sky-600",
    bg: "bg-sky-50"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Privacy First",
    description: "Your data is secure. We never sell your information to third parties.",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: <Users size={28} />,
    title: "Community Driven",
    description: "Join thousands of readers who trust CheckNews for their daily updates.",
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Smart Curation",
    description: "AI-powered recommendations based on your unique interests and habits.",
    color: "text-orange-600",
    bg: "bg-orange-50"
  }
];

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50/50 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <Sparkles size={14} /> Our Story
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-slate-950 leading-tight mb-8"
          >
            Trusted news for <br />
            <span className="text-indigo-600 italic font-light font-serif">informed decisions.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            CheckNews was founded with a simple mission: to deliver accurate, unbiased, 
            and timely news. We believe that access to quality journalism is a 
            fundamental right in the digital age.
          </motion.p>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-2"
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic">
                  {stat.value}
                </h2>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Why Choose CheckNews?
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Everything you need to stay informed in the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-glass hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-sm`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="pb-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent)]" />
          
          <div className="relative z-10 space-y-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl">
              <Target size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Our Commitment to You
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
              We're committed to delivering news that empowers you to make informed decisions. 
              In an era of misinformation, we stand as a beacon of truth, accuracy, and transparency. 
              Our team works around the clock to bring you stories that matter, from every corner of the globe.
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;