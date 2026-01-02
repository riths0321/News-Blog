import React from "react";
import { motion } from "framer-motion";
import { Gavel, CheckCircle, FileText, Globe, HelpCircle, ShieldAlert } from "lucide-react";

const Terms = () => {
  const sections = [
    { title: "Acceptance of Terms", icon: <CheckCircle size={18} /> },
    { title: "Use of Website", icon: <Globe size={18} /> },
    { title: "Intellectual Property Rights", icon: <FileText size={18} /> },
    { title: "User Content and Comments", icon: <FileText size={18} /> },
    { title: "Third-Party Links", icon: <Globe size={18} /> },
    { title: "Disclaimer of Warranties", icon: <ShieldAlert size={18} /> },
    { title: "Limitation of Liability", icon: <ShieldAlert size={18} /> },
    { title: "Indemnification", icon: <Gavel size={18} /> },
    { title: "Termination", icon: <ShieldAlert size={18} /> },
    { title: "Governing Law", icon: <Gavel size={18} /> },
    { title: "Contact Information", icon: <HelpCircle size={18} /> },
  ];

  // Placeholder content based on your original text
  const contentMap = {
    "Acceptance of Terms": [
      "By accessing and using CheckNews, you agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use our website.",
      "We reserve the right to modify these terms at any time. Your continued use of the website following any changes indicates your acceptance of the new terms."
    ],
    // ... logic remains same as previous legal pages
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <header className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200"
          >
            <Gavel size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight mb-4"
          >
            Terms of Service
          </motion.h1>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
            Last Updated: January 02, 2026
          </p>
        </header>

        {/* --- WELCOME BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="p-10 bg-slate-900 rounded-[3rem] shadow-2xl mb-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-white text-xl font-bold mb-4">Welcome to CheckNews</h3>
            <p className="text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto">
              These Terms of Service govern your use of our website and services. 
              By accessing or using CheckNews, you agree to be bound by these terms. 
              Please read them carefully.
            </p>
          </div>
          {/* Abstract Background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-[60px] rounded-full" />
        </motion.div>

        {/* --- TERMS SECTIONS --- */}
        <div className="space-y-20">
          {sections.map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-indigo-600 font-black text-sm tracking-tighter">SECTION {idx + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {section.title}
                  </h2>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  {/* Mapping content logic */}
                  <p className="text-slate-500 leading-relaxed font-medium text-lg">
                    CheckNews reserves all rights under intellectual property laws. Users are granted a limited 
                    license to access content for personal, non-commercial use only.
                  </p>
                  <p className="text-slate-500 leading-relaxed font-medium text-lg">
                    Unauthorized reproduction, distribution, or modification of any material on this site 
                    is strictly prohibited without prior written consent.
                  </p>
                </div>
              </div>
              
              {idx !== sections.length - 1 && (
                <div className="mt-20 h-px bg-slate-100 w-full" />
              )}
            </motion.section>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Terms;